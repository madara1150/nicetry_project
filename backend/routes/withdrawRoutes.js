const {withdrawCreate,withdrawById,getwithdraw,UpdateStatus } = require("../controllers/withdrawController.js")
const express = require('express');
const router = express.Router();

router.post('/create/:user_id',withdrawCreate )
router.get('/withdraw/:user_id',withdrawById)
router.get('/withdraw',getwithdraw)
router.put('/change/:id',UpdateStatus)

module.exports = router;