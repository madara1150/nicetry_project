const { createPost,deleltePost,UpdatePost,addLikePost } = require("../controllers/postController.js")
const express = require('express');
const router = express.Router();

router.post('/create', createPost)
router.delete('/delete/:id', deleltePost)
router.put('/update', UpdatePost)
router.put('/addlike',addLikePost)

module.exports = router;