const mongoose =require("mongoose")
const postModel=require("../models/intershipPost.js")
const createJobPost=async (req,res)=>{ try {
    
    const {jobDescription,jobTitle,remote,location,paid,price,companyId,jobRequirement,contactNo}=req.body
    
    const createdJobPost=await postModel.create({jobTitle,jobDescription,jobRequirement,remote,location,companyId,contactNo,paid,price,contactNo})
    
    res.status(201).json({data:createdJobPost})
} catch (error) {
 res.status.json({error})   
}
    }
const updateJobPost=async (req,res)=>{ try {
    const {id}=req.params
    const updatedJobPost=await postModel.findOneAndUpdate({_id:id},{$set:{...req.body}},{new:true})
    
    res.status(201).json({data:updatedJobPost})
} catch (error) {
 res.status.json({error})   
}
    }

const deleteJobPost=async (req,res)=>{ try {
    
    // const {id,jobDescription,jobTitle,remote,location,paid,price,companyId,jobRequirement,contactNo}=req.body
    const {id}=req.params
    const updatedJobPost=await postModel.findByIdAndDelete({_id:id})
    
    res.status(201).json({data:"post successfully deleted"})
} catch (error) {
 res.status.json({error})   
}
 }

const searchJobPost=async (req,res)=>{ try {
    
    // const {id,jobDescription,jobTitle,remote,location,paid,price,companyId,jobRequirement,contactNo}=req.body
    const {title}=req.query
    const searchedJobPost=await find({jobTitle:{$regex:new RegExp(`$.*{title}.*`,"gi")}})
    
    res.status(201).json({data:searchedJobPost})
} catch (error) {
 res.status.json({error})   
}
 }

    
    
    module.exports={createJobPost,updateJobPost,deleteJobPost,searchJobPost}