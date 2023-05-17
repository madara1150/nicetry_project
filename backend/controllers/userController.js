const { PrismaClient } = require("@prisma/client")
const bcrypt = require('bcrypt');
const { request } = require("express");
const prisma = new PrismaClient();

const jwt = require('jsonwebtoken')

const generateToken = (user) =>{
    const secret =  "nicetrywebpro"
    const expiresIn = '7d'
    return jwt.sign({sub: user.id, username: user.username},secret,{expiresIn })
}


const me = async (req, res) => {
    try{
        const { sub} = req.user
        console.log(sub);
        const user =  await prisma.User.findUnique({
            where:{
                id: sub
            },
            select:{
                id:true,
                first_name: true,
                last_name:true,
                username:true,
                password:true,
                role : true,
                email:true,
                phone_number:true,
                info:true,
                coin:true

            }
            
        })
        res.json({user})
    } catch(err){
        res.status(404).json({ message: err.message })
    }

}

const login = async (req,res) =>{
    try {
        const data = req.body;
        const response = await prisma.User.findMany({
            where: {
                username : data.username
            }
        })
        if(!response){
            throw new Error("Not found user")
        }
        const pwdMath = await bcrypt.compare(data.password,response[0].password)
        if(!pwdMath){
            throw   new Error("Wrong Password")
        }
        const token = await generateToken(response)
        res.status(200).json({ message: response, token: token })
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


//create user
const CreateUser = async (req, res) => {
    try {
        const { first_name, last_name, username, password, email, phone_number,info} = req.body;
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
            }
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }

}

const DeleteUser = async (req,res) => {
    try{
        const response = await prisma.User.delete({
            where: {
                id: req.params.id
              },
        })
        res.status(200).json(response)

    } catch (err){

        res.status(404).json({ message: err.message })
    }
}

const UpdateUser = async (req,res) => {
    try{

        const data = req.body
        const hashh = await bcrypt.hash(data.password, 13);
        const response = await prisma.User.update({
            where: {
                id: data.id
            },
            data:{
              first_name: data.first_name,
              last_name: data.last_name,
              username: data.username,
              email: data.email,
              role: data.role,
              phone_number: data.phone_number,
              password: hashh
            },
        })
        res.send('success')
    } catch (err){

        res.status(404).json({ message: err.message })
    }
}

const GetUserById = async (req, res) => {
    try {
        const response = await prisma.User.findUnique({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const GetAllUser = async (req, res) => {
    try {
        const response = await prisma.User.findMany({
            where: {
                role: 'USER'
              }
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const UpdateRoleUser = async (req,res) => {
    try{

        const data = req.body
        const response = await prisma.User.update({
            where: {
                id: data.id
            },
            data:{
              role : data.role
            },
        })
        res.send('success')
    } catch (err){

        res.status(404).json({ message: err.message })
    }
}


module.exports = { CreateUser,DeleteUser,UpdateUser,GetUserById,GetAllUser,UpdateRoleUser,login,me };

