const {donateCreate,changeStatus,getDonateById,getDonate,getTopDonate} = require("../controllers/donateController.js")
const { requireAdmin,requireSelf } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/create/:post_id/:user_id', requireSelf(), donateCreate)
router.put('/updatestatus/:id', requireAdmin, changeStatus)
router.get('/getdonate/:user_id',requireSelf(),getDonateById)
router.get('/getdonate',requireAdmin,getDonate)
router.get('/topdonate/:post_id',getTopDonate)

module.exports = router;