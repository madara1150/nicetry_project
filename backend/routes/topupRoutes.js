const express = require("express");
const topups = require("../controllers/topupController");
const { requireAdmin, requireSelf } = require("../middleware/auth");

const router = express.Router();

router.post("/create/:user_id", requireSelf(), topups.createTopup);
router.get("/topup/:user_id", requireSelf(), topups.getTopupsByUser);
router.get("/topup", requireAdmin, topups.getTopups);
router.get("/checktopup/:user_id", requireSelf(), topups.getApprovedTopupsByUser);
router.get("/all", requireAdmin, topups.getTopupsWithSlip);
router.put("/change/:id", requireAdmin, topups.approveTopup);

module.exports = router;
