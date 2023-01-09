const mongoose=require("mongoose")
const user=require("./user.js")
const companyInformation=mongoose.Schema({
  userId:{type:mongoose.SchemaTypes.ObjectId,ref:"User" ,required:true},
  name:{type:String,required:true},
  profilePicture:{type:String},
field:{type:String,required:true},
phoneNo:{type:String,required:true},
country:{type:String,required:true},
address:{type:String,required:true},
numberOfEmployee:{type:Number},
email:{type:String},
})

module.exports=mongoose.model("company Information",companyInformation)