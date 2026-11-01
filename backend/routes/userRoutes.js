const {
  CreateUser,
  DeleteUser,
  UpdateUser,
  GetUserById,
  GetAllUser,
  UpdateRoleUser,
  login,
  me,
  getComment,
  checkImgProfile
} = require("../controllers/userController.js");
const express = require("express");
const router = express.Router();
const { authenticate, requireAdmin } = require("../middleware/auth.js");

router.post("/create", CreateUser);
router.delete("/delete/:id", requireAdmin, DeleteUser);
router.put("/update", authenticate, UpdateUser);
router.get("/user/:id", GetUserById);
router.get("/user", requireAdmin, GetAllUser);
router.put("/updaterole", requireAdmin, UpdateRoleUser);
router.post("/login", login);
router.get("/me", authenticate, me);
router.get('/checkcomment/:id',getComment)
router.get('/checkimg/:user_id',checkImgProfile)

module.exports = router;
