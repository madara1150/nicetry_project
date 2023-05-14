const { PrismaClient } = require("@prisma/client")
const bcrypt = require('bcrypt')
const prisma = new PrismaClient();

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



module.exports = { CreateUser,DeleteUser,UpdateUser,GetUserById,GetAllUser,UpdateRoleUser };

