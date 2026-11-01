const prisma = require("../lib/prisma");
const { handle } = require("../lib/http");

const toggleLike = handle(async (req, res) => {
  const key = { post_id: req.params.post_id, user_id: req.params.user_id };

  const result = await prisma.$transaction(async (tx) => {
    const current = await tx.like.findUnique({ where: { post_id_user_id: key } });
    const state = !current?.state;
    await tx.like.upsert({
      where: { post_id_user_id: key },
      update: { state },
      create: { ...key, state },
    });
    const post = await tx.post.update({
      where: { id: key.post_id },
      data: { like: { increment: state ? 1 : -1 } },
    });
    return { state, like: post.like };
  });
  res.json(result);
});

const getLikeState = handle(async (req, res) => {
  const like = await prisma.like.findUnique({
    where: {
      post_id_user_id: { post_id: req.params.post_id, user_id: req.user.sub },
    },
  });
  res.json({ state: Boolean(like?.state) });
});

module.exports = { toggleLike, getLikeState };
