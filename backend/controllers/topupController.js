const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const topupCreate = async (req,res) =>{
    const data = req.body
    try {
        if(!Number.isInteger(data.amount) || data.amount <= 0){
            return res.status(400).json({ message: "Invalid amount" })
        }
        const response = await prisma.Topup.create({
            data: {
                user_id: req.params.user_id,
                amount: data.amount,
                bank_topup: data.bank_topup,
                topup_package: data.topup_package,
                bank_num: data.bank_num,
                topup_time: new Date(data.topup_time)
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
            },
            orderBy: {
                topup_time: 'desc',
              },
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const getTopupByIdTrue = async (req,res) =>{

    try {
        
        const response = await prisma.Topup.findMany({
            where: {
                user_id: req.params.user_id,
                status: true
            },
            orderBy: {
                topup_time: 'desc',
              },
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

const getTopupimg = async (req,res) =>{

    try {
        
        const response = await prisma.Image.findMany({
            include:{
                Topup:true
            }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const UpdateStatus = async (req, res) => {
    try {
      await prisma.$transaction(async (tx) => {
        const topup = await tx.topup.findUnique({
          where: {
            id: req.params.id,
          },
        });
        if (!topup) {
          throw new Error("Topup not found");
        }
        const approved = await tx.topup.updateMany({
          where: {
            id: req.params.id,
            status: false,
          },
          data: {
            status: true
          },
        });
        if (approved.count === 0) {
          throw new Error("Topup already approved");
        }
        await tx.user.update({
          where: {
            id: topup.user_id,
          },
          data: {
            coin: { increment: topup.amount },
          },
        });
      });
      res.send("success");
    } catch (err) {
      res.status(404).json({ message: err.message });
    }
  };
  



module.exports = { topupCreate,getTopupById,getTopup,getTopupByIdTrue,getTopupimg,UpdateStatus};
