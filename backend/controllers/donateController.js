const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const publicUser = {
    id: true,
    first_name: true,
    last_name: true,
    username: true,
}

const donateCreate = async (req,res) =>{
    const amount = Number(req.body.amount)

    try {
        if(!Number.isInteger(amount) || amount <= 0){
            return res.status(400).json({ message: "Invalid amount" })
        }
        const post = await prisma.Post.findUnique({
            where:{
                id: req.params.post_id
            }
        })
        if(!post){
            return res.status(404).json({ message: "Post not found" })
        }
        const response = await prisma.$transaction(async (tx) => {
            const paid = await tx.user.updateMany({
                where:{
                    id: req.params.user_id,
                    coin: { gte: amount }
                },
                data:{
                    coin: { decrement: amount }
                }
            })
            if(paid.count === 0){
                throw new Error("Not enough coin")
            }
            await tx.user.update({
                where:{
                    id: post.user_id
                },
                data:{
                    coin: { increment: amount }
                }
            })
            return tx.donation.create({
                data: {
                    user_id: req.params.user_id,
                    post_id: req.params.post_id,
                    amount: amount
                    }
            })
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
                User: { select: publicUser }
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
                User: { select: publicUser },
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