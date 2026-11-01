const {withdrawCreate,withdrawById,getwithdraw,UpdateStatus } = require("../controllers/withdrawController.js")
const { requireAdmin,requireSelf } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/create/:user_id',requireSelf(),withdrawCreate )
router.get('/withdraw/:user_id',requireSelf(),withdrawById)
router.get('/withdraw',requireAdmin,getwithdraw)
router.put('/change/:id',requireAdmin,UpdateStatus)

module.exports = router;