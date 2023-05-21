const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const reportCreate = async (req,res) => {
    const data = req.body
    try {
        
        const response = await prisma.Report.create({
            data: {
                user_id: req.params.user_id,
                post_id: req.params.post_id,
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
        const response = await prisma.Report.findUique({
        })
        res.status(200).json(response)
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

const getReportAllbyId = async (req,res) =>{
    try {
        const response = await prisma.Post.findMany({
            where:{
                user_id: req.params.user_id
            },
        })
        if(response.length == 0){
            return res.json({message: `สวัสดียินดีต้อนรับเข้าสู่ระบบ`})
        }
        for (let i = 0; i < response.length; i++) {
            const checkReport = await prisma.Report.findMany({
                where:{
                    post_id: response[i].id,
                    status: true
                }
            })
            if(checkReport.length){
                return res.json({message: `โพสของคุณโดนลบ เนื่องจากการรายงาน`})
            }
        }
        
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


module.exports = { reportCreate,changeStatus,getReportAll ,getReportAllbyId};
