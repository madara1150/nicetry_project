const {reportCreate ,changeStatus,getReportAll,getReportAllbyId} = require("../controllers/reportController.js")
const { requireAdmin,requireSelf } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/create/:post_id/:user_id', requireSelf(), reportCreate)
router.put('/updatestatus/:id',requireAdmin,changeStatus)
router.get('/report',requireAdmin,getReportAll)
router.get('/reported/:user_id',requireSelf(),getReportAllbyId)


module.exports = router;