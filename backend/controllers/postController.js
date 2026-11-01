const prisma = require("../lib/prisma");
const { handle, publicUser } = require("../lib/http");

const postDetails = {
  User: { select: publicUser },
  image: true,
  _count: { select: { comment: true } },
};

const createPost = handle(async (req, res) => {
  const post = await prisma.post.create({
    data: {
      user_id: req.user.sub,
      info: req.body.info,
    },
  });
  res.json(post);
});

const deletePost = handle(async (req, res) => {
  const post = await prisma.post.delete({ where: { id: req.params.id } });
  res.json(post);
});

const updatePost = handle(async (req, res) => {
  const { id, info } = req.body;
  await prisma.post.update({ where: { id }, data: { info } });
  res.send("success");
});

const getAllPosts = handle(async (req, res) => {
  const posts = await prisma.post.findMany({
    orderBy: { CreateAt: "desc" },
    include: postDetails,
  });
  res.json(posts);
});

const getPostsByUser = handle(async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { user_id: req.params.user_id },
    orderBy: { CreateAt: "desc" },
    include: postDetails,
  });
  res.json(posts);
});

const getMostLikedPost = handle(async (req, res) => {
  const post = await prisma.post.findFirst({
    orderBy: { like: "desc" },
    include: postDetails,
  });
  res.json(post);
});

module.exports = {
  createPost,
  deletePost,
  updatePost,
  getAllPosts,
  getPostsByUser,
  getMostLikedPost,
};
