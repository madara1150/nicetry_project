const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

const createPost = async (req,res) =>{
   try{
        const data = req.body
        const response = await prisma.Post.create({
            data: {
                user_id: data.user_id,
                info: data.info,
                like: data.like
                }
        })
        res.status(200).json(response)
   } catch(err){
        res.status(404).json({ message: err.message })
   }
}

const deleltePost = async (req,res) =>{
    try{
         const response = await prisma.Post.delete({
            where: {
                id: req.params.id
              },
         })
         res.status(200).json(response)
    } catch(err){
         res.status(404).json({ message: err.message })
    }
 }

 const UpdatePost = async (req,res) => {
    try{

        const data = req.body
        const response = await prisma.Post.update({
            where: {
                id: data.id
            },
            data:{
              info: data.info,
            },
        })
        res.send('success')
    } catch (err){

        res.status(404).json({ message: err.message })
    }
}

const addLikePost = async (req,res) => {
    const data = req.body
    const like = await prisma.Post.findMany({
        where:{
            id: data.id
        },
        select: {
            like: true,
          }
    })
    console.log(like[0].like);
    try{
        const response = await prisma.Post.update({
            where: {
                id: data.id
            },
            data:{
              like: like[0].like+1,
            },
        })
        res.send('success')
    } catch (err){

        res.status(404).json({ message: err.message })
    }
}


module.exports = {createPost,deleltePost,UpdatePost,addLikePost}