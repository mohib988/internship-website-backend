const mongoose =require("mongoose")
const user = require("./user")
const userInformation=mongoose.Schema({

  userId:{type:mongoose.SchemaTypes.ObjectId,ref:"User" ,required:true},
  name:{type:String,require:true},
gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  profilePicture:{type:String},
field:{type:String,required:true},
// skills:{type:[String],required:true},
phoneNo:{type:String,required:true},
country:{type:String,required:true},
address:{type:String}

})

module.exports=mongoose.model("User Information",userInformation)