const mongoose =require("mongoose")
const skillAndSummaryModel=mongoose.Schema({
user_id:{type:String ,require:true},
summary:{type:String},
skill:{type:[String]}

})
module.exports=mongoose.model("",projectModel)