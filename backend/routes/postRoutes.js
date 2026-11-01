const { createPost,deleltePost,UpdatePost,addLikePost,getPostAll,getPostById,DisLikePost ,mostPost} = require("../controllers/postController.js")
const { authenticate,requireOwner } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/create', authenticate, createPost)
router.delete('/delete/:id', requireOwner('Post'), deleltePost)
router.put('/update', requireOwner('Post',(req) => req.body.id), UpdatePost)
router.put('/addlike/:id',authenticate,addLikePost)
router.put('/dislike/:id',authenticate,DisLikePost)
router.get('/mainpost',getPostAll)
router.get('/postUserId/:user_id',getPostById)
router.get('/most',mostPost)


module.exports = router;