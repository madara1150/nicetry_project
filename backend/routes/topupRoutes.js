const { topupCreate,getTopupById,getTopup,getTopupByIdTrue,getTopupimg,UpdateStatus} = require("../controllers/topupController.js")
const { requireAdmin,requireSelf } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/create/:user_id', requireSelf(), topupCreate)
router.get('/topup/:user_id', requireSelf(), getTopupById)
router.get('/topup', requireAdmin, getTopup)
router.get('/checktopup/:user_id',requireSelf(),getTopupByIdTrue)
router.get('/all',requireAdmin,getTopupimg)
router.put('/change/:id',requireAdmin,UpdateStatus)

module.exports = router;