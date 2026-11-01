class HttpError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
  }
}

const handle = (controller) => async (req, res, next) => {
  try {
    await controller(req, res);
  } catch (err) {
    next(err);
  }
};

const errorHandler = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }
  // P2025 is Prisma's "record to update or delete was not found"
  if (err.code === "P2025") {
    return res.status(404).json({ message: "ไม่พบข้อมูล" });
  }
  console.error(err);
  res.status(500).json({ message: "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" });
};

const parseAmount = (value) => {
  const amount = Number(value);
  if (!Number.isInteger(amount) || amount <= 0) {
    throw new HttpError(400, "จำนวนต้องเป็นจำนวนเต็มที่มากกว่า 0");
  }
  return amount;
};

// Fields of a user that anyone may see
const publicUser = {
  id: true,
  first_name: true,
  last_name: true,
  username: true,
  info: true,
};

module.exports = { HttpError, handle, errorHandler, parseAmount, publicUser };
