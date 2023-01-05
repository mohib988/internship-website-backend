const mongoose =require("mongoose")
const companyInformation=mongoose.Schema({
  companyName:{type:String,required:true},
  companyPicture:{type:String},
companyDomain:{type:String,required:true},
phoneNo:{type:String,required:true},
country:{type:String,required:true},
address:{type:String,required:true},
numberOfEmployee:{type:Number},
CompanyEmail:{type:String},
})

module.exports=mongoose.model("company Information",companyInformation)