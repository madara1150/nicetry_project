const express = require("express");
const posts = require("../controllers/postController");
const { authenticate, requireOwner } = require("../middleware/auth");

const router = express.Router();

router.post("/create", authenticate, posts.createPost);
router.put("/update", requireOwner("post", (req) => req.body.id), posts.updatePost);
router.delete("/delete/:id", requireOwner("post"), posts.deletePost);
router.get("/mainpost", posts.getAllPosts);
router.get("/postUserId/:user_id", posts.getPostsByUser);
router.get("/most", posts.getMostLikedPost);

module.exports = router;
