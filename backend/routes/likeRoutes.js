const { likeCreate,getLike} = require("../controllers/likeController.js")
const express = require('express');
const router = express.Router();


router.post('/create/:post_id/:user_id', likeCreate)
router.get('/getlike/:post_id', getLike)

module.exports = router;