const { CreateUser,DeleteUser,UpdateUser,GetUserById,GetAllUser,UpdateRoleUser } = require("../controllers/userController.js")
const express = require('express');
const router = express.Router();

router.post('/create', CreateUser)
router.delete('/delete/:id', DeleteUser)
router.put('/update', UpdateUser)
router.get('/user/:id', GetUserById)
router.get('/user', GetAllUser)
router.put('/updaterole', UpdateRoleUser)

module.exports = router;