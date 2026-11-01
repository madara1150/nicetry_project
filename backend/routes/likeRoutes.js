const express = require("express");
const likes = require("../controllers/likeController");
const { authenticate, requireSelf } = require("../middleware/auth");

const router = express.Router();

router.post("/toggle/:post_id/:user_id", requireSelf(), likes.toggleLike);
router.get("/getlike/:post_id", authenticate, likes.getLikeState);

module.exports = router;
