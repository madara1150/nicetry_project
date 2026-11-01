const {createImageuser,createImagePost,createImageTopup,editProfile,getImageByPostId,getImageByUsertId} = require("../controllers/imageController.js")
const { authenticate,requireSelf,requireOwner } = require("../middleware/auth.js")
const express = require('express');
const router = express.Router();

router.post('/createuser', authenticate, createImageuser)
router.post('/createpost',requireOwner('Post',(req) => req.body.post_id),createImagePost)
router.post('/createtopup',requireOwner('Topup',(req) => req.body.topup_id),createImageTopup)
router.put('/editprofile/:user_id', requireSelf(), editProfile)
router.get('/getpostimage/:post_id',getImageByPostId)
router.get('/getuserimage/:user_id',getImageByUsertId)


module.exports = router;