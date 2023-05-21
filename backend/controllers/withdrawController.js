const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const withdrawCreate = async (req,res) =>{
    try{
        const data = req.body
        const response = await prisma.Withdraw.create({
            data: {
                user_id: req.params.user_id,
                amount: data.amount,
                bank_name: data.bank_name,
                acc_num: data.acc_num
                }
        })
        res.status(200).json(response)
   } catch(err){
        res.status(404).json({ message: err.message })
   }
}

const withdrawById = async (req,res) =>{
    try{
        const data = req.body
        const response = await prisma.Withdraw.findMany({
            where:{
                user_id: req.params.user_id
            }
        })
        res.status(200).json(response)
   } catch(err){
        res.status(404).json({ message: err.message })
   }
}

const getwithdraw = async (req,res) =>{
    try{
        const response = await prisma.Withdraw.findMany({
        })
        res.status(200).json(response)
   } catch(err){
        res.status(404).json({ message: err.message })
   }
}


module.exports = {withdrawCreate ,withdrawById,getwithdraw};
