const mongoose =require("mongoose")

const projectModel=mongoose.Schema({
userId:{type:mongoose.SchemaTypes.ObjectId,require:true},
projects:{type:[{title:{type:String},description:{type:String}}],require:true},

})
module.exports=mongoose.model("project",projectModel)