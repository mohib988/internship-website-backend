const mongoose =require("mongoose")
const companyInformation=mongoose.Schema({
  Companyname:{type:String,require:true},
  companyPicture:{type:String},
companyDomain:{type:String,require:true},
phoneNo:{type:String,require:true},
country:{type:String,require:true},
address:{type:String,require:true},
numberOfEmployee:{type:Number}
})

module.exports=mongoose.model("company Information",companyInformation)