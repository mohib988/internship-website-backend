const mongoose =require("mongoose")
const user = require("./user")
const experienceModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,required:true,ref:"User"},
experiences:{type:[{instituteName:{type:String,required:true} ,startingDate:{type:Date,required:true},endingDate:{type:Date,required:"true"},description:{type:String}}],required:true},

})
module.exports=mongoose.model("experience",experienceModel)