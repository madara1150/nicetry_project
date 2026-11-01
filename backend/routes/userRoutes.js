const express = require("express");
const users = require("../controllers/userController");
const { authenticate, requireAdmin } = require("../middleware/auth");

const router = express.Router();

router.post("/create", users.createUser);
router.post("/login", users.login);
router.get("/me", authenticate, users.me);
router.put("/update", authenticate, users.updateUser);
router.get("/user/:id", users.getUserById);
router.get("/user", requireAdmin, users.getAllUsers);
router.put("/updaterole", requireAdmin, users.updateUserRole);
router.delete("/delete/:id", requireAdmin, users.deleteUser);
router.get("/checkcomment/:id", users.getPostComments);
router.get("/checkimg/:user_id", users.getUserImages);

module.exports = router;
