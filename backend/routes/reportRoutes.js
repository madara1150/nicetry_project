const {reportCreate ,changeStatus,getReportAll} = require("../controllers/reportController.js")
const express = require('express');
const router = express.Router();

router.post('/create', reportCreate)
router.put('/updatestatus/:id',changeStatus)
router.get('/report',getReportAll)

module.exports = router;