const mongoose =require("mongoose")
const user=require("./user.js")

const skillAndSummaryModel=mongoose.Schema({
userId:{type:String ,require:true,ref:"User"},
summary:{type:String},
skill:{type:[String]}

})
module.exports=mongoose.model("skill and summary",skillAndSummaryModel)