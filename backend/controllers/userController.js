const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");
const { request } = require("express");
const prisma = new PrismaClient();
const Joi = require('joi');



const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const secret = "nicetrywebpro";
  const expiresIn = "7d";
  return jwt.sign({ sub: user[0].id }, secret, { expiresIn });
};

const me = async (req, res) => {
  try {
    const { sub } = req.user;

    const user = await prisma.User.findUnique({
      where: {
        id: sub,
      },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        username: true,
        password: true,
        role: true,
        email: true,
        phone_number: true,
        info: true,
        coin: true,
      },
    });
    res.json({ user });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const data = req.body;
    const response = await prisma.User.findMany({
      where: {
        username: data.username,
      },
    });
    if (response.length === 0) {
      throw new Error("Not found user");
    }
    const pwdMath = await bcrypt.compare(data.password, response[0].password);
    if (!pwdMath) {
      throw new Error("Wrong Password");
    }
    const token = await generateToken(response);
    res.status(200).json({ message: response, token: token });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const schema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8).max(15),
  phone_number: Joi.string().pattern(/^0\d{8,10}$/)
});



//create user
const CreateUser = async (req, res) => {
  
  try {
    const {
      first_name,
      last_name,
      username,
      password,
      email,
      phone_number,
      info,
    } = req.body;
    const result = schema.validate({
      email,password,phone_number
    })
    if(result.error){
      throw new Error(result.error.message);
    }
    const user = await prisma.User.findMany({
      where: {
        username:username,
      },
    });
    if (user.length === 1) {
      throw new Error("Username is used");
    }
    if(password.length < 8){
      throw new Error("Password must 8-15");
    }
    const hash = await bcrypt.hash(password, 13);
    const response = await prisma.User.create({
      data: {
        first_name: first_name,
        last_name: last_name,
        username: username,
        password: hash,
        email: email,
        phone_number: phone_number,
        info: info,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const DeleteUser = async (req, res) => {
  try {
    const response = await prisma.User.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const UpdateUser = async (req, res) => {
  const data =req.body
  try {
   const {first_name,
    last_name,
    password,
    email,
    phone_number} = req.body;
    const result = schema.validate({
      email,password,phone_number
    })
    if(result.error){
      throw new Error(result.error.message);
    }
    const hash = await bcrypt.hash(password, 13);
    const response = await prisma.User.update({
      where: {
        id: data.id,
      },
      data: {
        first_name:first_name,
        last_name: last_name,
        email: data.email,
        phone_number: data.phone_number,
        password: hash
      },
    });
    res.send("success");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateMoney = async (req, res) => {
  try {
    const data = req.body;
    const response = await prisma.User.update({
      where: {
        id: req.params.id,
      },
      data: {
        coin: data.coin
      },
    });
    res.send("success");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


const GetUserById = async (req, res) => {
  try {
    const response = await prisma.User.findUnique({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const GetAllUser = async (req, res) => {
  try {
    const response = await prisma.User.findMany({
      where: {
        role: "USER",
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const UpdateRoleUser = async (req, res) => {
  try {
    const data = req.body;
    const response = await prisma.User.update({
      where: {
        id: data.id,
      },
      data: {
        role: data.role,
      },
    });
    res.send("success");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getComment = async (req,res) =>{
  try {
    const getComments = await prisma.Comment.findMany({
      where: { 
        post_id: req.params.id 
      },
      include: {
        User: true,
        Post:true,
      }
    })
    res.status(200).json(getComments);
  } catch (err) {
    res.status(404).json({ message: err.message });

  }
}


const checkImgProfile = async (req,res) =>{
  try {
    const getComments = await prisma.Image.findMany({
      where: { user_id: req.params.user_id },
    })
    res.status(200).json(getComments);
  } catch (err) {
    res.status(404).json({ message: err.message });

  }
}



module.exports = {
  CreateUser,
  DeleteUser,
  UpdateUser,
  GetUserById,
  GetAllUser,
  UpdateRoleUser,
  login,
  me,
  getComment,
  checkImgProfile,
  updateMoney
};
