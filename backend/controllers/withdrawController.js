const prisma = require("../lib/prisma");
const { HttpError, handle, parseAmount, publicUser } = require("../lib/http");

const createWithdraw = handle(async (req, res) => {
  const { bank_name, acc_num } = req.body;
  const user_id = req.params.user_id;
  const amount = parseAmount(req.body.amount);

  const user = await prisma.user.findUnique({ where: { id: user_id } });
  if (amount > user.coin) {
    throw new HttpError(400, "เหรียญไม่เพียงพอ");
  }
  const withdraw = await prisma.withdraw.create({
    data: { user_id, amount, bank_name, acc_num },
  });
  res.json(withdraw);
});

const getWithdrawsByUser = handle(async (req, res) => {
  const withdraws = await prisma.withdraw.findMany({
    where: { user_id: req.params.user_id },
    orderBy: { createAt: "desc" },
  });
  res.json(withdraws);
});

const getWithdraws = handle(async (req, res) => {
  const withdraws = await prisma.withdraw.findMany({
    orderBy: { createAt: "desc" },
    include: { User: { select: publicUser } },
  });
  res.json(withdraws);
});

const approveWithdraw = handle(async (req, res) => {
  await prisma.$transaction(async (tx) => {
    const withdraw = await tx.withdraw.findUnique({ where: { id: req.params.id } });
    if (!withdraw) {
      throw new HttpError(404, "ไม่พบรายการถอนเงิน");
    }
    const approved = await tx.withdraw.updateMany({
      where: { id: withdraw.id, status: false },
      data: { status: true },
    });
    if (approved.count === 0) {
      throw new HttpError(409, "รายการนี้อนุมัติไปแล้ว");
    }
    const paid = await tx.user.updateMany({
      where: { id: withdraw.user_id, coin: { gte: withdraw.amount } },
      data: { coin: { decrement: withdraw.amount } },
    });
    if (paid.count === 0) {
      throw new HttpError(400, "เหรียญไม่เพียงพอ");
    }
  });
  res.send("success");
});

module.exports = { createWithdraw, getWithdrawsByUser, getWithdraws, approveWithdraw };
