const mongoose =require("mongoose")
const companyInformation=mongoose.Schema({
  Companyname:{type:String,required:true},
  companyPicture:{type:String},
companyDomain:{type:String,required:true},
phoneNo:{type:String,required:true},
country:{type:String,required:true},
address:{type:String,required:true},
numberOfEmployee:{type:Number}
})

module.exports=mongoose.model("company Information",companyInformation)