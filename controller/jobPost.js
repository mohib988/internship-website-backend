const postModel=require("../models/intershipPost.js")
const mongoose=require("mongoose")
const getJobPost=async (req,res)=>{ 
    try {
    const {page}=req.query
    const limit=8;
    const start=(Number(page) -1)*limit


    const JobPost=await postModel.find({}).limit(limit).skip(start).populate("companyId","name profilePicture")
    
    res.status(201).json({data:JobPost})
} catch (error) {
 res.status(404).json({error})   
}
 }


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
//? what is the question
//todo the is due on me
//* the is due on me

const searchJobPost=async (req,res)=>{ 
    try {
    
    // const {id,jobDescription,jobTitle,remote,location,paid,price,companyId,jobRequirement,contactNo}=req.body
    const {title}=req.query
    const searchedJobPost=await postModel.find({jobTitle:{$regex:new RegExp(`.*${title}.*`,"gi")}})
    
    res.status(201).json({data:searchedJobPost})
} catch (error) {
 res.status(404).json({error})   
}
 }

    
    
    module.exports={createJobPost,updateJobPost,deleteJobPost,searchJobPost,getJobPost}