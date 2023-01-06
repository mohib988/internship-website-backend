const { findOneAndUpdate } = require("../models/skillAndSummary.js")
const skillAndSummaryModel=require("../models/skillAndSummary.js")


const createSkillAndSummary=async (req,res)=>{
    //  try {
    
    const {summary,skill,userId}=req.body
    
    const createdSkillAndSummary=await skillAndSummaryModel.create({userId,summary,skill})
    
    res.status(201).json({data:createdSkillAndSummary})
// } 
// catch (error) {
//  res.status(400).json({error})   
// }
    }
const updateSkillAndSummary=async (req,res)=>{
    //  try {
    const {summary,skill,userId,type}
    =req.body
    if(type=="skill"){
   await skillAndSummaryModel.findOneAndUpdate({userId},{$push:{skill}},{new:true})
        
} 
   else if(type==="summary"){
    await skillAndSummaryModel.findOneAndUpdate({userId},{$set:{summary}},{new:true})
    
} 
else{
    return res.status(404).json({data:"error"});
}
const data=await skillAndSummaryModel.findOne({userId})
res.status(201).json({data})

// } 
// catch (error) {
//  res.status(400).json({error})   
// }
    }
module.exports={createSkillAndSummary,updateSkillAndSummary}