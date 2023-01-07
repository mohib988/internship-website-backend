const mongoose=require("mongoose")
const user=require("./user.js")
const companyInformation=mongoose.Schema({
  userId:{type:mongoose.SchemaTypes.ObjectId,ref:user ,required:true},
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