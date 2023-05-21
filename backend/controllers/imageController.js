const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient();

const createImageuser = async (req,res) =>{
    try{
         const data = req.body
         const response = await prisma.Image.create({
             data: {
                 user_id: data.user_id,
                 filePath: data.filePath
                 }
         })
         res.status(200).json(response)
    } catch(err){
         res.status(404).json({ message: err.message })
    }
 }

 const createImagePost = async (req,res) =>{
    try{
         const data = req.body
         const response = await prisma.Image.create({
             data: {
                 post_id: data.post_id,
                 filePath: data.filePath
                 }
         })
         res.status(200).json(response)
    } catch(err){
         res.status(404).json({ message: err.message })
    }
 }

 

 const createImageTopup = async (req,res) =>{
    try{
         const data = req.body
         const response = await prisma.Image.create({
             data: {
                 topup_id: data.topup_id,
                 filePath: data.filePath
                 }
         })
         res.status(200).json(response)
    } catch(err){
         res.status(404).json({ message: err.message })
    }
 }

 const editProfile = async (req,res) =>{
    try{
        const latestImage = await prisma.Image.findFirst({
            where: {
              user_id: req.params.user_id
            },
            orderBy: {
              uploadDate: 'desc'
            }
          });
      
          if (latestImage) {
            const response = await prisma.Image.update({
              where: {
                id: latestImage.id
              },
              data: {
                filePath: req.body.filePath
              }
            });
      
            res.status(200).send("Successfully updated profile");
          } else {
            res.status(404).json({ message: "No image found for the given user ID" });
          }
    } catch(err){
         res.status(404).json({ message: err.message })
    }
 }

 const getImageByPostId = async (req,res) =>{

  try {
      
      const response = await prisma.Image.findMany({
          where: {
              post_id: req.params.post_id
          },
      })
      res.status(200).json(response) 
  } catch (err) {
      res.status(404).json({ message: err.message })

  }
}

const getImageByUsertId = async (req,res) =>{

  try {
      
      const response = await prisma.Image.findMany({
          where: {
              user_id: req.params.user_id
          },
          orderBy: {
            uploadDate: 'desc'
          }
      })
      res.status(200).json(response) 
  } catch (err) {
      res.status(404).json({ message: err.message })

  }
}

 
module.exports = {createImageuser,createImagePost,createImageTopup,editProfile,getImageByPostId,getImageByUsertId}