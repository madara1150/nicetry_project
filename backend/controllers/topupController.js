const prisma = require("../lib/prisma");
const { HttpError, handle, parseAmount, publicUser } = require("../lib/http");

const createTopup = handle(async (req, res) => {
  const { bank_topup, topup_package, bank_num } = req.body;
  const topup_time = new Date(req.body.topup_time);
  if (Number.isNaN(topup_time.getTime())) {
    throw new HttpError(400, "วันเวลาที่โอนไม่ถูกต้อง");
  }
  const topup = await prisma.topup.create({
    data: {
      user_id: req.params.user_id,
      amount: parseAmount(req.body.amount),
      bank_topup,
      topup_package,
      bank_num,
      topup_time,
    },
  });
  res.json(topup);
});

const getTopupsByUser = handle(async (req, res) => {
  const topups = await prisma.topup.findMany({
    where: { user_id: req.params.user_id },
    orderBy: { topup_time: "desc" },
  });
  res.json(topups);
});

const getApprovedTopupsByUser = handle(async (req, res) => {
  const topups = await prisma.topup.findMany({
    where: { user_id: req.params.user_id, status: true },
    orderBy: { topup_time: "desc" },
  });
  res.json(topups);
});

const getTopups = handle(async (req, res) => {
  res.json(await prisma.topup.findMany());
});

const getTopupsWithSlip = handle(async (req, res) => {
  const topups = await prisma.topup.findMany({
    orderBy: { topup_time: "desc" },
    include: {
      image: true,
      User: { select: publicUser },
    },
  });
  res.json(topups);
});

const approveTopup = handle(async (req, res) => {
  await prisma.$transaction(async (tx) => {
    const topup = await tx.topup.findUnique({ where: { id: req.params.id } });
    if (!topup) {
      throw new HttpError(404, "ไม่พบรายการเติมเหรียญ");
    }
    const approved = await tx.topup.updateMany({
      where: { id: topup.id, status: false },
      data: { status: true },
    });
    if (approved.count === 0) {
      throw new HttpError(409, "รายการนี้อนุมัติไปแล้ว");
    }
    await tx.user.update({
      where: { id: topup.user_id },
      data: { coin: { increment: topup.amount } },
    });
  });
  res.send("success");
});

module.exports = {
  createTopup,
  getTopupsByUser,
  getApprovedTopupsByUser,
  getTopups,
  getTopupsWithSlip,
  approveTopup,
};
