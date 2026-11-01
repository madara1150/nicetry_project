const jwt = require("jsonwebtoken");
const prisma = require("../lib/prisma");
const { HttpError } = require("../lib/http");

const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return next(new HttpError(401, "กรุณาเข้าสู่ระบบ"));
  }
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    next(new HttpError(401, "เซสชันหมดอายุ กรุณาเข้าสู่ระบบอีกครั้ง"));
  }
};

const isAdmin = async (req) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.sub },
    select: { role: true },
  });
  return user?.role === "ADMIN";
};

// Runs an async check, then continues to the next handler
const check = (run) => async (req, res, next) => {
  try {
    await run(req);
    next();
  } catch (err) {
    next(err);
  }
};

const requireAdmin = [
  authenticate,
  check(async (req) => {
    if (!(await isAdmin(req))) {
      throw new HttpError(403, "เฉพาะผู้ดูแลระบบเท่านั้น");
    }
  }),
];

// The URL must name the logged in user, e.g. /create/:post_id/:user_id
const requireSelf = (param = "user_id") => [
  authenticate,
  (req, res, next) => {
    if (req.params[param] !== req.user.sub) {
      return next(new HttpError(403, "ไม่มีสิทธิ์ทำรายการนี้"));
    }
    next();
  },
];

// The record must belong to the logged in user, admins can pass too
const requireOwner = (model, getId = (req) => req.params.id) => [
  authenticate,
  check(async (req) => {
    const record = await prisma[model].findUnique({
      where: { id: getId(req) },
    });
    if (!record) {
      throw new HttpError(404, "ไม่พบข้อมูล");
    }
    if (record.user_id !== req.user.sub && !(await isAdmin(req))) {
      throw new HttpError(403, "ไม่มีสิทธิ์ทำรายการนี้");
    }
  }),
];

module.exports = { authenticate, requireAdmin, requireSelf, requireOwner };
