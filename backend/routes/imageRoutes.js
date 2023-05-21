const {createImageuser,createImagePost,createImageTopup,editProfile,getImageByPostId,getImageByUsertId} = require("../controllers/imageController.js")
const express = require('express');
const router = express.Router();

router.post('/createuser', createImageuser)
router.post('/createpost',createImagePost)
router.post('/createtopup',createImageTopup)
router.put('/editprofile/:user_id', editProfile)
router.get('/getpostimage/:post_id',getImageByPostId)
router.get('/getuserimage/:user_id',getImageByUsertId)


module.exports = router;