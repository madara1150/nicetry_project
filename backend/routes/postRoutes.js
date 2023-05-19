const { createPost,deleltePost,UpdatePost,addLikePost,getPostAll,getPostById } = require("../controllers/postController.js")
const express = require('express');
const router = express.Router();

router.post('/create', createPost)
router.delete('/delete/:id', deleltePost)
router.put('/update', UpdatePost)
router.put('/addlike',addLikePost)
router.get('/mainpost',getPostAll)
router.get('/postUserId/:id',getPostById)


module.exports = router;