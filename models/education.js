const mongoose =require("mongoose")
const user = require("./user")
const educationModel=mongoose.Schema({
userId:{type:mongoose.Types.ObjectId ,required:true,ref:user},
educations:{type:[{instituteName:{type:String,required:true} ,startingDate:{type:Date,required:true},endingDate:{type:Date,required:"true"},despription:{type:String}}],required:true},

})
module.exports=mongoose.model("education",educationModel)