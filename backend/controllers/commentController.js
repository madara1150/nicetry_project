const prisma = require("../lib/prisma");
const { handle } = require("../lib/http");

const createComment = handle(async (req, res) => {
  const { post_id, user_id } = req.params;
  const comment = await prisma.comment.create({
    data: { user_id, post_id, info: req.body.info },
  });
  res.json(comment);
});

const deleteComment = handle(async (req, res) => {
  await prisma.comment.delete({ where: { id: req.params.id } });
  res.send("success");
});

const updateComment = handle(async (req, res) => {
  await prisma.comment.update({
    where: { id: req.params.id },
    data: { info: req.body.info },
  });
  res.send("success");
});

const getComments = handle(async (req, res) => {
  const comments = await prisma.comment.findMany({
    where: { post_id: req.params.post_id },
  });
  res.json(comments);
});

module.exports = { createComment, deleteComment, updateComment, getComments };
