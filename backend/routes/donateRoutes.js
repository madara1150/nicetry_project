const express = require("express");
const donations = require("../controllers/donateController");
const { requireAdmin, requireSelf } = require("../middleware/auth");

const router = express.Router();

router.post("/create/:post_id/:user_id", requireSelf(), donations.createDonation);
router.put("/updatestatus/:id", requireAdmin, donations.approveDonation);
router.get("/getdonate/:user_id", requireSelf(), donations.getDonationsByUser);
router.get("/getdonate", requireAdmin, donations.getDonations);
router.get("/topdonate/:post_id", donations.getTopDonations);

module.exports = router;
