const mongoose =require("mongoose")
const user = require("./user")
const projectModel=mongoose.Schema({
userId:{type:mongoose.SchemaTypes.ObjectId,require:true,ref:user},
projects:{type:[{title:{type:String},description:{type:String}}],require:true},

})
module.exports=mongoose.model("project",projectModel)