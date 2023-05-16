const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const commentCreate = async (req,res) => {
    const data = req.body
    try {
        
        const response = await prisma.Comment.create({
            data: {
                user_id: data.user_id,
                post_id: data.post_id,
                info: data.info
                }
        })
        res.status(200).json(response) 
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const deleteComment = async (req,res) => {

    try {
        const response = await prisma.Comment.delete({
            where :{
                id: req.params.id
            }
        })
        res.status(200).send('delete successs') 
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
    
}

const updateComment = async (req,res) => {
    try {
        const response = await prisma.Comment.update({
            where :{
                id: req.params.id,
            },data: {
                info: req.body.info
            }
        })
        res.status(200).send('success')
    } catch (err) {
        
    }
}

const getAllComment = async (req,res) => {
    try {
        const response = await prisma.Comment.findMany({
            where :{
                post_id: req.params.post_id,
            }
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}


module.exports = {commentCreate,deleteComment,updateComment,getAllComment}