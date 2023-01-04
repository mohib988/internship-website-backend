const mongoose =require("mongoose")
const user = require("./user")
const userInformation=mongoose.Schema({
user_id:{type:mongoose.SchemaTypes.ObjectId,ref:user ,require:true},
gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  profilePicture:{type:String},
field:{type:String,require:true},
// skills:{type:[String],require:true},
phoneNo:{type:String,require:true},
country:{type:String,require:true},

})

module.exports=mongoose.model("User Information",userInformation)