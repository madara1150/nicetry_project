const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const likeCreate = async (req,res) => {
    
    try {
        const data = req.body
        const response = await prisma.Like.upsert({
            where: { 
                post_id_user_id: {
                    post_id: req.params.post_id,
                    user_id: req.params.user_id,
                },
             }, 
            update: { state: data.state }, 
            create: { 
                user_id: req.params.user_id,
                post_id: req.params.post_id,
                state : false
             }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const getLike = async (req,res) => {
    const data = req.body
    try {
        
        const response = await prisma.Like.findMany({
            where: { 
                user_id: data.user_id,
                post_id: req.params.post_id
             }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

module.exports = {likeCreate,getLike}