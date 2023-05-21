const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const donateCreate = async (req,res) =>{
    const data = req.body

    try {
        
        const response = await prisma.Donation.create({
            data: {
                user_id: req.params.user_id,
                post_id: req.params.post_id,
                amount: data.amount
                }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const changeStatus = async (req,res) => {
    try {
        const response = await prisma.Donation.update({
            where:{
                id : req.params.id
            },
            data:{
                status: true
            }
        })
        res.status(200).send('update status sucess')
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


const getDonateById = async (req,res) => {
    try {
        const response = await prisma.Donation.findMany({
            where:{
                user_id : req.params.user_id
            },
            include:{
                User:true
            }
        })
        res.status(200).json(response)
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const getTopDonate = async (req,res) => {
    try {
        const response = await prisma.Donation.findMany({
            where:{
                post_id : req.params.post_id
            },
            orderBy: {
                amount: 'desc',
              },
              take:5,
              include: {
                User: true,
              }
        })
        res.status(200).json(response)
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const getDonate = async (req,res) => {
    try {
        const response = await prisma.Donation.findMany({
        })
        res.status(200).json(response)
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = {donateCreate,changeStatus,getDonateById,getDonate,getTopDonate}