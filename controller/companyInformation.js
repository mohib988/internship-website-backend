const companyInformation=require("../models/companyInformation.js")

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
module.exports={createCompanyProfile}


