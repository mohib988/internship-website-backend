const mongoose =require("mongoose")
const educationModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,require:true},
educations:{type:[{instituteName:{type:String,require:true} ,startingDate:{type:Date,require:true},endingDate:{type:Date,require:"true"},despription:{type:String}}],require:true},

})
module.exports=mongoose.model("education",educationModel)