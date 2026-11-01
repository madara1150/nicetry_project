const { likeCreate,getLike} = require("../controllers/likeController.js")
const { requireSelf } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();


router.post('/create/:post_id/:user_id', requireSelf(), likeCreate)
router.get('/getlike/:post_id', getLike)

module.exports = router;