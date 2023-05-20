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
const jwt = require("jsonwebtoken");

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: "error", message: "No token provided" });
  }

  try {
    const decodedToken = jwt.verify(token, "nicetrywebpro");
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ status: "error", message: "Invalid token" });
  }
};

router.post("/create", CreateUser);
router.delete("/delete/:id", DeleteUser);
router.put("/update", UpdateUser);
router.get("/user/:id", GetUserById);
router.get("/user", GetAllUser);
router.put("/updaterole", UpdateRoleUser);
router.post("/login", login);
router.get("/me", authenticate, me);
router.get('/checkcomment/:id',getComment)
router.get('/checkimg/:user_id',checkImgProfile)

module.exports = router;
