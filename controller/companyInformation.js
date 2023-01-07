const companyInformation=require("../models/companyInformation.js")
const mongoose=require("mongoose")

const getcompany=async (req,res)=>{ 
    try {
    const {page}=req.query
    const limit=8;
    const start=(Number(page) -1)*limit

    const company=await companyInformation.find({}).limit(limit).skip(start)
    
    res.status(201).json({data:company})
} catch (error) {
 res.status(404).json({error})   
}
 }
const getOnecompany=async (req,res)=>{ 
    try {
    const {userId}=req.body


    const company=await companyInformation.findOne({userId})
    
    res.status(201).json({data:company})
} catch (error) {
 res.status(404).json({error})   
}
 }
 

const createCompanyProfile=async (req,res)=>{
    try {
        
        const {companyName,companyDomain,phoneNo,address,country,numberOfEmployee,companyEmail,userId}=req.body
        const companyPicture=req.file.path
        
        const createdCompanyInformation=await companyInformation.create({userId,companyName,companyDomain,address,phoneNo,country,numberOfEmployee,companyEmail,companyPicture:companyPicture,})
        
        res.status(201).json({data:createdCompanyInformation})
    } catch (error) {
        res.status(404).json({data:error})    
    }

 
}
module.exports={createCompanyProfile,getcompany,getOnecompany}


