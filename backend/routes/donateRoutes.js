const {donateCreate,changeStatus,getDonateById,getDonate} = require("../controllers/donateController.js")
const express = require('express');
const router = express.Router();

router.post('/create', donateCreate)
router.put('/updatestatus/:id', changeStatus)
router.get('/getdonate/:user_id',getDonateById)
router.get('/getdonate',getDonate)

module.exports = router;