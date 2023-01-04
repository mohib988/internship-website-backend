const mongoose =require("mongoose")
const experienceModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,require:true},
experiences:{type:[{instituteName:{type:String,require:true} ,startingDate:{type:Date,require:true},endingDate:{type:Date,require:"true"},despription:{type:String}}],require:true},

})
module.exports=mongoose.model("experience",experienceModel)