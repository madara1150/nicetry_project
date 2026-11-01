const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");
const prisma = new PrismaClient();

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "No token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ status: "error", message: "Invalid token" });
  }
};

const isAdmin = async (req) => {
  const user = await prisma.User.findUnique({
    where: {
      id: req.user.sub,
    },
    select: {
      role: true,
    },
  });
  return user?.role === "ADMIN";
};

const requireAdmin = [
  authenticate,
  async (req, res, next) => {
    try {
      if (!(await isAdmin(req))) {
        return res.status(403).json({ status: "error", message: "Admin only" });
      }
      next();
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },
];

// The URL must name the logged in user, e.g. /create/:post_id/:user_id
const requireSelf = (param = "user_id") => [
  authenticate,
  (req, res, next) => {
    if (req.params[param] !== req.user.sub) {
      return res.status(403).json({ status: "error", message: "Forbidden" });
    }
    next();
  },
];

// The record must belong to the logged in user, admins can pass too
const requireOwner = (model, getId = (req) => req.params.id) => [
  authenticate,
  async (req, res, next) => {
    try {
      const record = await prisma[model].findUnique({
        where: {
          id: getId(req),
        },
      });
      if (!record) {
        return res.status(404).json({ message: `${model} not found` });
      }
      if (record.user_id !== req.user.sub && !(await isAdmin(req))) {
        return res.status(403).json({ status: "error", message: "Forbidden" });
      }
      next();
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  },
];

module.exports = { authenticate, requireAdmin, requireSelf, requireOwner };
