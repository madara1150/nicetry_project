const { topupCreate,getTopupById,getTopup} = require("../controllers/topupController.js")
const express = require('express');
const router = express.Router();

router.post('/create', topupCreate)
router.get('/topup/:user_id', getTopupById)
router.get('/topup', getTopup)

module.exports = router;