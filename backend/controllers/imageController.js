const prisma = require("../lib/prisma");
const { HttpError, handle } = require("../lib/http");

const createUserImage = handle(async (req, res) => {
  const image = await prisma.image.create({
    data: { user_id: req.user.sub, filePath: req.body.filePath },
  });
  res.json(image);
});

const createPostImage = handle(async (req, res) => {
  const { post_id, filePath } = req.body;
  res.json(await prisma.image.create({ data: { post_id, filePath } }));
});

const createTopupImage = handle(async (req, res) => {
  const { topup_id, filePath } = req.body;
  res.json(await prisma.image.create({ data: { topup_id, filePath } }));
});

const updateProfileImage = handle(async (req, res) => {
  const latestImage = await prisma.image.findFirst({
    where: { user_id: req.params.user_id },
    orderBy: { uploadDate: "desc" },
  });
  if (!latestImage) {
    throw new HttpError(404, "ไม่พบรูปโปรไฟล์");
  }
  await prisma.image.update({
    where: { id: latestImage.id },
    data: { filePath: req.body.filePath },
  });
  res.send("success");
});

const getImagesByPost = handle(async (req, res) => {
  const images = await prisma.image.findMany({
    where: { post_id: req.params.post_id },
  });
  res.json(images);
});

const getImagesByUser = handle(async (req, res) => {
  const images = await prisma.image.findMany({
    where: { user_id: req.params.user_id },
    orderBy: { uploadDate: "desc" },
  });
  res.json(images);
});

module.exports = {
  createUserImage,
  createPostImage,
  createTopupImage,
  updateProfileImage,
  getImagesByPost,
  getImagesByUser,
};
