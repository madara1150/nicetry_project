const { CreateUser } = require("../controllers/userController.js")
const express = require('express');
const router = express.Router();

router.post('/users', CreateUser)

module.exports = router;