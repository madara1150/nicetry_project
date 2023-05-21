const {reportCreate ,changeStatus,getReportAll,getReportAllbyId} = require("../controllers/reportController.js")
const express = require('express');
const router = express.Router();

router.post('/create/:post_id/:user_id', reportCreate)
router.put('/updatestatus/:id',changeStatus)
router.get('/report',getReportAll)
router.get('/reported/:user_id',getReportAllbyId)


module.exports = router;