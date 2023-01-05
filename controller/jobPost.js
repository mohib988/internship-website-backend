const mongoose =require("mongoose")
const postModel=require("../models/intershipPost.js")
const createJobPost=async (req,res)=>{
    const {jobDescription,jobTitle,remote,location,paid,price,companyId,jobRequirement,contactNo}=req.body
   
    const createdJobPost=await postModel.create({jobTitle,jobDescription,jobRequirement,remote,location,companyId,contactNo,paid,price,contactNo})
    
    res.status(201).json({data:createdJobPost})
    
     
    }



    module.exports={createJobPost}