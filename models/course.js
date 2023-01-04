const mongoose =require("mongoose")
const courseModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,require:true},
courses:{type:[{courseName:{type:String,require:true} ,Institute:{type:String,require:true}}],require:true},

})
module.exports=mongoose.model("course",courseModel)