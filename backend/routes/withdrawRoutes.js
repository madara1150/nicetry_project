const express = require("express");
const withdraws = require("../controllers/withdrawController");
const { requireAdmin, requireSelf } = require("../middleware/auth");

const router = express.Router();

router.post("/create/:user_id", requireSelf(), withdraws.createWithdraw);
router.get("/withdraw/:user_id", requireSelf(), withdraws.getWithdrawsByUser);
router.get("/withdraw", requireAdmin, withdraws.getWithdraws);
router.put("/change/:id", requireAdmin, withdraws.approveWithdraw);

module.exports = router;
