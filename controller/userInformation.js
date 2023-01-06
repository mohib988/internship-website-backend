const userInformation=require("../models/userinfo.js")

const createProfile=async (req,res)=>{
const {gender,field,skill,phone}=req.body
const image=req.file.path
// const genderSmall=new RegExp(gender,"i")
const createInformation=await userInformation.create({gender,field:field,phone:phone,profilePicture:image})

res.status(201).json({data:createInformation})

 
}
module.exports={createProfile}


