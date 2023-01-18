const jwt= require("jsonwebtoken");

const  mongoose  = require("mongoose");
const UserModel=require("../models/user.js")
const secret="test"



const signin=async (req,res)=>{
    const {email,password}=req.body
  try {
    
    const user=await UserModel.findOne({email,password}) 
    if (!user) return res.status(404).json({ message: "User doesn't exist" });

const token = jwt.sign({ email: user.email, id: user._id }, secret, { expiresIn: "1h" });
res.status(200).json({data:{user,token}})

} catch (error) {
  
  res.status(200).json({error:error})
  }
}
const signup= async (req,res)=>{
    const { email, password,type } = req.body;
    try {
      const oldUser = await UserModel.findOne({ email });
  
      if (oldUser) return res.status(400).json({ message: "User already exists" });
  
  
      const user = await UserModel.create({ email, password: password,type:type});
  
      const token = jwt.sign( { email: user.email, id: user._id }, secret, { expiresIn: "1h" } );
  
      res.status(201).json({ data:{user,token}});
    } catch (error) {
      res.status(500).json({ message: "Error" });
      
      console.log(error);
    }
  };

module.exports={signup,signin}