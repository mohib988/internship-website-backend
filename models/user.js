const mongoose=require("mongoose")
const userSchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  type:{type:String,enum:["user","company"]}
});

module.exports= mongoose.model("User", userSchema);