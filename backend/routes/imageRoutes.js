const express = require("express");
const images = require("../controllers/imageController");
const { authenticate, requireSelf, requireOwner } = require("../middleware/auth");

const router = express.Router();

router.post("/createuser", authenticate, images.createUserImage);
router.post("/createpost", requireOwner("post", (req) => req.body.post_id), images.createPostImage);
router.post("/createtopup", requireOwner("topup", (req) => req.body.topup_id), images.createTopupImage);
router.put("/editprofile/:user_id", requireSelf(), images.updateProfileImage);
router.get("/getpostimage/:post_id", images.getImagesByPost);
router.get("/getuserimage/:user_id", images.getImagesByUser);

module.exports = router;
