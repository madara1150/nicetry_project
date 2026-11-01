const prisma = require("../lib/prisma");
const { handle, publicUser } = require("../lib/http");

const createReport = handle(async (req, res) => {
  const { post_id, user_id } = req.params;
  const report = await prisma.report.create({
    data: { user_id, post_id, reson: req.body.reson },
  });
  res.json(report);
});

const approveReport = handle(async (req, res) => {
  await prisma.report.update({
    where: { id: req.params.id },
    data: { status: true },
  });
  res.send("success");
});

const getReports = handle(async (req, res) => {
  const reports = await prisma.report.findMany({
    include: {
      User: { select: publicUser },
      Post: { select: { info: true } },
    },
  });
  res.json(reports);
});

const getReportNotice = handle(async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { user_id: req.params.user_id },
    select: { id: true },
  });
  const removed = await prisma.report.findFirst({
    where: {
      post_id: { in: posts.map((post) => post.id) },
      status: true,
    },
  });
  res.json({
    message: removed
      ? "โพสต์ของคุณถูกลบ เนื่องจากการรายงาน"
      : "ยินดีต้อนรับเข้าสู่ NiceTry",
  });
});

module.exports = { createReport, approveReport, getReports, getReportNotice };
