const mongoose =require("mongoose")
const user = require("./user")
const courseModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,require:true,ref:user},
courses:{type:[{courseName:{type:String,require:true} ,Institute:{type:String,require:true}}],require:true},

})
module.exports=mongoose.model("course",courseModel)