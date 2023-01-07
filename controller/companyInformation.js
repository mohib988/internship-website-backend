const companyInformation=require("../models/companyInformation.js")


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

const createCompanyProfile=async (req,res)=>{
    try {
        
        const {companyName,companyDomain,phoneNo,address,country,numberOfEmployee,companyEmail}=req.body
        const companyPicture=req.file.path
        
        const createdCompanyInformation=await companyInformation.create({companyName,companyDomain,address,phoneNo,country,numberOfEmployee,companyEmail,companyPicture:companyPicture})
        
        res.status(201).json({data:createdCompanyInformation})
    } catch (error) {
        res.status(404).json({data:error})    
    }

 
}
module.exports={createCompanyProfile,getcompany}


