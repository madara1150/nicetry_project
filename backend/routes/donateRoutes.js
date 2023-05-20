const {donateCreate,changeStatus,getDonateById,getDonate,getTopDonate} = require("../controllers/donateController.js")
const express = require('express');
const router = express.Router();

router.post('/create/:post_id/:user_id', donateCreate)
router.put('/updatestatus/:id', changeStatus)
router.get('/getdonate/:user_id',getDonateById)
router.get('/getdonate',getDonate)
router.get('/topdonate/:post_id',getTopDonate)

module.exports = router;