const { commentCreate ,deleteComment,updateComment,getAllComment} = require("../controllers/commentController.js")
const express = require('express');
const router = express.Router();

router.post('/create/:post_id/:user_id' , commentCreate)
router.delete('/delete/:id' , deleteComment)
router.put('/update/:id',updateComment)
router.get('/comment/:post_id', getAllComment)
module.exports = router;