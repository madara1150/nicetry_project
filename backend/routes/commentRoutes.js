const { commentCreate ,deleteComment,updateComment,getAllComment} = require("../controllers/commentController.js")
const { requireSelf,requireOwner } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/create/:post_id/:user_id' , requireSelf(), commentCreate)
router.delete('/delete/:id' , requireOwner('Comment'), deleteComment)
router.put('/update/:id',requireOwner('Comment'),updateComment)
router.get('/comment/:post_id', getAllComment)
module.exports = router;