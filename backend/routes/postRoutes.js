const { createPost,deleltePost,UpdatePost,addLikePost,getPostAll,getPostById,DisLikePost } = require("../controllers/postController.js")
const express = require('express');
const router = express.Router();

router.post('/create', createPost)
router.delete('/delete/:id', deleltePost)
router.put('/update', UpdatePost)
router.put('/addlike/:id',addLikePost)
router.put('/dislike/:id',DisLikePost)
router.get('/mainpost',getPostAll)
router.get('/postUserId/:id',getPostById)


module.exports = router;