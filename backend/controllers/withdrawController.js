const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const withdrawCreate = async (req,res) =>{
    try{
        const data = req.body
        const amount = Number(data.amount)
        if(!Number.isInteger(amount) || amount <= 0){
            return res.status(400).json({ message: "Invalid amount" })
        }
        const response = await prisma.Withdraw.create({
            data: {
                user_id: req.params.user_id,
                amount: amount,
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

const UpdateStatus = async (req, res) => {
    try {
      await prisma.$transaction(async (tx) => {
        const withdraw = await tx.withdraw.findUnique({
          where: {
            id: req.params.id,
          },
        });
        if (!withdraw) {
          throw new Error("Withdraw not found");
        }
        const approved = await tx.withdraw.updateMany({
          where: {
            id: req.params.id,
            status: false,
          },
          data: {
            status: true
          },
        });
        if (approved.count === 0) {
          throw new Error("Withdraw already approved");
        }
        const paid = await tx.user.updateMany({
          where: {
            id: withdraw.user_id,
            coin: { gte: withdraw.amount },
          },
          data: {
            coin: { decrement: withdraw.amount },
          },
        });
        if (paid.count === 0) {
          throw new Error("Not enough coin");
        }
      });
      res.send("success");
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };


module.exports = {withdrawCreate ,withdrawById,getwithdraw,UpdateStatus};
