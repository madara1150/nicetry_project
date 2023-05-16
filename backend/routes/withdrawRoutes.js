const {withdrawCreate,withdrawById,getwithdraw } = require("../controllers/withdrawController.js")
const express = require('express');
const router = express.Router();

router.post('/create',withdrawCreate )
router.get('/withdraw/:user_id',withdrawById)
router.get('/withdraw',getwithdraw)

module.exports = router;