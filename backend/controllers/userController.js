const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");
const { HttpError, handle, publicUser } = require("../lib/http");

const accountSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "รูปแบบอีเมลไม่ถูกต้อง",
    "any.required": "กรุณากรอกอีเมล",
    "string.empty": "กรุณากรอกอีเมล",
  }),
  password: Joi.string().required().min(8).max(15).messages({
    "string.min": "รหัสผ่านต้องมี 8-15 ตัวอักษร",
    "string.max": "รหัสผ่านต้องมี 8-15 ตัวอักษร",
    "any.required": "กรุณากรอกรหัสผ่าน",
    "string.empty": "กรุณากรอกรหัสผ่าน",
  }),
  phone_number: Joi.string()
    .pattern(/^0\d{8,10}$/)
    .messages({
      "string.pattern.base": "เบอร์โทรต้องขึ้นต้นด้วย 0 และมี 9-11 หลัก",
      "string.empty": "กรุณากรอกเบอร์โทร",
    }),
});

// Leaving the password blank on the profile form keeps the current one
const updateSchema = accountSchema.fork("password", (field) => field.optional());

const validate = (schema, { email, password, phone_number }) => {
  const { error } = schema.validate({ email, password, phone_number });
  if (error) {
    throw new HttpError(400, error.message);
  }
};

const generateToken = (user) =>
  jwt.sign({ sub: user.id }, process.env.JWT_SECRET, { expiresIn: "7d" });

const withoutPassword = ({ password, ...user }) => user;

const me = handle(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.sub },
  });
  if (!user) {
    throw new HttpError(401, "ไม่พบบัญชีผู้ใช้");
  }
  res.json({ user: withoutPassword(user) });
});

const login = handle(async (req, res) => {
  const { username, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { username: String(username ?? "") },
  });
  const matched = user && (await bcrypt.compare(String(password ?? ""), user.password));
  if (!matched) {
    throw new HttpError(400, "ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
  res.json({ user: withoutPassword(user), token: generateToken(user) });
});

const createUser = handle(async (req, res) => {
  const { first_name, last_name, username, password, email, phone_number, info } = req.body;
  validate(accountSchema, req.body);

  const existing = await prisma.user.findUnique({ where: { username } });
  if (existing) {
    throw new HttpError(409, "ชื่อผู้ใช้นี้ถูกใช้แล้ว");
  }
  const user = await prisma.user.create({
    data: {
      first_name,
      last_name,
      username,
      password: await bcrypt.hash(password, 13),
      email,
      phone_number,
      info,
    },
  });
  res.json(withoutPassword(user));
});

const deleteUser = handle(async (req, res) => {
  const user = await prisma.user.delete({ where: { id: req.params.id } });
  res.json(withoutPassword(user));
});

const updateUser = handle(async (req, res) => {
  const { first_name, last_name, password, email, phone_number } = req.body;
  validate(updateSchema, { email, password: password || undefined, phone_number });

  await prisma.user.update({
    where: { id: req.user.sub },
    data: {
      first_name,
      last_name,
      email,
      phone_number,
      ...(password && { password: await bcrypt.hash(password, 13) }),
    },
  });
  res.send("success");
});

const getUserById = handle(async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.params.id },
    select: publicUser,
  });
  res.json(user);
});

const getAllUsers = handle(async (req, res) => {
  const users = await prisma.user.findMany({ where: { role: "USER" } });
  res.json(users.map(withoutPassword));
});

const updateUserRole = handle(async (req, res) => {
  const { id, role } = req.body;
  if (!["USER", "ADMIN"].includes(role)) {
    throw new HttpError(400, "สิทธิ์ผู้ใช้ไม่ถูกต้อง");
  }
  await prisma.user.update({ where: { id }, data: { role } });
  res.send("success");
});

const getPostComments = handle(async (req, res) => {
  const comments = await prisma.comment.findMany({
    where: { post_id: req.params.id },
    orderBy: { createAt: "asc" },
    include: { User: { select: publicUser } },
  });
  res.json(comments);
});

const getUserImages = handle(async (req, res) => {
  const images = await prisma.image.findMany({
    where: { user_id: req.params.user_id },
  });
  res.json(images);
});

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  getAllUsers,
  updateUserRole,
  login,
  me,
  getPostComments,
  getUserImages,
};
