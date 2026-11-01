const express = require("express");
const comments = require("../controllers/commentController");
const { requireSelf, requireOwner } = require("../middleware/auth");

const router = express.Router();

router.post("/create/:post_id/:user_id", requireSelf(), comments.createComment);
router.put("/update/:id", requireOwner("comment"), comments.updateComment);
router.delete("/delete/:id", requireOwner("comment"), comments.deleteComment);
router.get("/comment/:post_id", comments.getComments);

module.exports = router;
