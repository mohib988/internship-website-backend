const mongoose =require("mongoose")
const user = require("./user")
const userInformation=mongoose.Schema({
user_id:{type:mongoose.SchemaTypes.ObjectId,ref:user ,required:true},
gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  profilePicture:{type:String},
field:{type:String,required:true},
// skills:{type:[String],required:true},
phoneNo:{type:String,required:true},
country:{type:String,required:true},

})

module.exports=mongoose.model("User Information",userInformation)