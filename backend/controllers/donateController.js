const prisma = require("../lib/prisma");
const { HttpError, handle, parseAmount, publicUser } = require("../lib/http");

const createDonation = handle(async (req, res) => {
  const { post_id, user_id } = req.params;
  const amount = parseAmount(req.body.amount);

  const post = await prisma.post.findUnique({ where: { id: post_id } });
  if (!post) {
    throw new HttpError(404, "ไม่พบโพสต์");
  }

  const donation = await prisma.$transaction(async (tx) => {
    const paid = await tx.user.updateMany({
      where: { id: user_id, coin: { gte: amount } },
      data: { coin: { decrement: amount } },
    });
    if (paid.count === 0) {
      throw new HttpError(400, "เหรียญไม่เพียงพอ");
    }
    await tx.user.update({
      where: { id: post.user_id },
      data: { coin: { increment: amount } },
    });
    return tx.donation.create({ data: { user_id, post_id, amount } });
  });
  res.json(donation);
});

const approveDonation = handle(async (req, res) => {
  await prisma.donation.update({
    where: { id: req.params.id },
    data: { status: true },
  });
  res.send("success");
});

const getDonationsByUser = handle(async (req, res) => {
  const donations = await prisma.donation.findMany({
    where: { user_id: req.params.user_id },
    orderBy: { CreateAt: "desc" },
    include: { Post: { select: { info: true } } },
  });
  res.json(donations);
});

const getTopDonations = handle(async (req, res) => {
  const donations = await prisma.donation.findMany({
    where: { post_id: req.params.post_id },
    orderBy: { amount: "desc" },
    take: 5,
    include: { User: { select: publicUser } },
  });
  res.json(donations);
});

const getDonations = handle(async (req, res) => {
  res.json(await prisma.donation.findMany());
});

module.exports = {
  createDonation,
  approveDonation,
  getDonationsByUser,
  getDonations,
  getTopDonations,
};
