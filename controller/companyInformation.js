const mongoose=require("mongoose")
const companyInformation=require("../models/companyInformation.js")

const createCompanyProfile=async (req,res)=>{
const {companyName,companyDomain,phoneNo,address,country,numberOfEmployee}=req.body
const companyPicture=req.file.path

const companyInformation=await userInformation.create({companyName,companyDomain,address,phoneNo,country,numberOfEmployee,companyPicture:companyPicture})

res.status(201).json({data:companyInformation})

 
}
module.exports={createCompanyProfile}


