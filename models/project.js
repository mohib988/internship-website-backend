const mongoose =require("mongoose")
const user = require("./user")
const projectModel=mongoose.Schema({
userId:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:"User"},
projects:{type:[{title:{type:String},description:{type:String}}],required:true},

})
module.exports=mongoose.model("project",projectModel)