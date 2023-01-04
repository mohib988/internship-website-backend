const mongoose =require("mongoose")
const user = require("./user")
const experienceModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,require:true,ref:user},
experiences:{type:[{instituteName:{type:String,require:true} ,startingDate:{type:Date,require:true},endingDate:{type:Date,require:"true"},despription:{type:String}}],require:true},

})
module.exports=mongoose.model("experience",experienceModel)