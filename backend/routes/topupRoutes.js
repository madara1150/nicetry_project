const { topupCreate,getTopupById,getTopup,getTopupByIdTrue,getTopupimg,UpdateStatus} = require("../controllers/topupController.js")
const express = require('express');
const router = express.Router();

router.post('/create/:user_id', topupCreate)
router.get('/topup/:user_id', getTopupById)
router.get('/topup', getTopup)
router.get('/checktopup/:user_id',getTopupByIdTrue)
router.get('/all',getTopupimg)
router.put('/change/:id',UpdateStatus)

module.exports = router;