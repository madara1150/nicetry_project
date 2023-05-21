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
    const like = await prisma.Post.findMany({
        where:{
            id: req.params.id
        },
        select: {
            like: true,
          }
    })

    try{
        const response = await prisma.Post.update({
            where: {
                id: req.params.id
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

const DisLikePost = async (req,res) => {
    const like = await prisma.Post.findMany({
        where:{
            id: req.params.id
        },
        select: {
            like: true,
          }
    })

    try{
        const response = await prisma.Post.update({
            where: {
                id: req.params.id
            },
            data:{
              like: like[0].like-1,
            },
        })
        res.send('success')
    } catch (err){

        res.status(404).json({ message: err.message })
    }
}

const getPostAll =async (req,res) => {
    try{
        const response = await prisma.Post.findMany({
        })
        res.status(200).json(response)
    } catch (err){
        res.status(404).json({ message: err.message })
    }
}

const getPostById = async (req,res)=> {
    try {
        const response = await prisma.Post.findMany({
            where: {
                user_id: req.params.user_id
            },
            orderBy: {
                CreateAt: 'desc'
              }
            
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}
const mostPost = async (req,res) =>{
    try {
        const response = await prisma.Post.findMany({
            orderBy: {
                like: 'desc'
              },
        })
        console.log(response[0].id)
        const image = await prisma.image.findMany({
            where:{
                post_id: response[0].id
            }
        })
        console.log(image);
        res.status(200).json({
            post:
                response[0],
            image:image
            
        })
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}

const CheckImage = async (req,res)=> {
    data = req.body
    try {
        const response = await prisma.Post.findMany({
            where: {
                info: data.info,
                user_id: data.user_id,
                CreateAt: new Date(data.CreateAt)
            },
            
        })
        res.status(200).json(response)
    } catch (err) {
        res.status(404).json({ message: err.message })

    }
}


module.exports = {createPost,deleltePost,UpdatePost,addLikePost,getPostAll,getPostById,CheckImage,DisLikePost,mostPost}