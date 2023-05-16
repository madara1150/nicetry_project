const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const reportCreate = async (req,res) => {
    const data = req.body
    try {
        
        const response = await prisma.Report.create({
            data: {
                user_id: data.user_id,
                post_id: data.post_id,
                reson: data.reson
                }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const changeStatus = async (req,res) => {
    try {
        const response = await prisma.Report.update({
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

const getReportAll = async (req,res) =>{
    try {
        const response = await prisma.Report.findMany({
        })
        res.status(200).json(response)
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}



module.exports = { reportCreate,changeStatus,getReportAll };
