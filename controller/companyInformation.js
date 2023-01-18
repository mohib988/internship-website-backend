const companyInformation=require("../models/companyInformation.js")
const mongoose=require("mongoose")

const getCompany=async (req,res)=>{ 
    try {
    const {page,search}=req.query
    console.log(page)
    if (search){
        const company=await companyInformation.find({name:new RegExp(`^${search}`,"gi")})
        console.log(page)
        res.status(201).json({data:company})
    }
else{

    const limit=8;
    const start=(Number(page) -1)*limit
    
    const company=await (await companyInformation.find({}).limit(limit).skip(start)).reverse()
    
    res.status(201).json({data:company})
}
} catch (error) {
 res.status(404).json({error})   
}
 }
const getOnecompany=async (req,res)=>{ 
    try {
    const {id}=req.params;


    const company=await companyInformation.findOne({_id:id})
    
    res.status(201).json({data:company})
} catch (error) {
 res.status(404).json({error})   
}
 }
 

const createCompanyProfile=async (req,res)=>{
    try {
        
        const {name,field,phoneNo,address,country,numberOfEmployee,email,userId}=req.body
        const profilePicture=req.file.path
        
        const createdCompanyInformation=await companyInformation.create({userId,name,field,address,phoneNo,country,numberOfEmployee,email,profilePicture:profilePicture,})
        console.log(createCompanyProfile)
        res.status(201).json({data:createdCompanyInformation})
    } catch (error) {
        res.status(404).json({data:error})    
    }

 
}
module.exports={createCompanyProfile,getCompany,getOnecompany}


