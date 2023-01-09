const mongoose =require("mongoose")
const user = require("./user")
const courseModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,required:true,ref:"User"},
courses:{type:[{courseName:{type:String,required:true} ,institute:{type:String,required:true}}],required:true},

})
module.exports=mongoose.model("course",courseModel)