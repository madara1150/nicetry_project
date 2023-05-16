const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const topupCreate = async (req,res) =>{
    const data = req.body
    try {
        
        const response = await prisma.Topup.create({
            data: {
                user_id: data.user_id,
                amount: data.amount,
                slip_img: data.slip_img,
                bank_topup: data.bank_topup,
                topup_package: data.topup_package
                }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const getTopupById = async (req,res) =>{

    try {
        
        const response = await prisma.Topup.findMany({
            where: {
                user_id: req.params.user_id
            }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const getTopup = async (req,res) =>{

    try {
        
        const response = await prisma.Topup.findMany({
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}



module.exports = { topupCreate,getTopupById,getTopup};
