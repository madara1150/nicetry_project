const express = require("express");
const reports = require("../controllers/reportController");
const { requireAdmin, requireSelf } = require("../middleware/auth");

const router = express.Router();

router.post("/create/:post_id/:user_id", requireSelf(), reports.createReport);
router.put("/updatestatus/:id", requireAdmin, reports.approveReport);
router.get("/report", requireAdmin, reports.getReports);
router.get("/reported/:user_id", requireSelf(), reports.getReportNotice);

module.exports = router;
