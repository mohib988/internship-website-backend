const { findOneAndUpdate } = require("../models/skillAndSummary.js")
const skillAndSummaryModel=require("../models/skillAndSummary.js")
const mongoose=require("mongoose")

const createSkillAndSummary=async (req,res)=>{
     try {
    
    const {summary,skill,userId}=req.body
    
    const createdSkillAndSummary=await skillAndSummaryModel.create({userId,summary,skill})
    
    res.status(201).json({data:createdSkillAndSummary})
} 
catch (error) {
 res.status(400).json({error})   
}
    }
const updateSkillAndSummary=async (req,res)=>{
    //  try {
        // const {userId}=req.params
    const {summary,type,userId}=  req.body
    
    if(type=="skill"){
        console.log(req.body.skill)
        const skill=(req.body.skill).split(/[,+/\s]+/)
        console.log(skill)
   await skillAndSummaryModel.findOneAndUpdate({userId},{$set:{skill}},{new:true})
   
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



const deleteSkill=async (req,res)=>{
    //  try {
    const {skillIndex,userId}
    =req.body

const data=await skillAndSummaryModel.findOne({userId})
const updatedSkill=data.skill
updatedSkill.splice(skillIndex,1)

const updatedSkillAndSummary=await skillAndSummaryModel.findOneAndUpdate({userId},{$set:{skill:updatedSkill}},{new:true})
res.status(201).json({data:updatedSkillAndSummary})

} 
// catch (error) {
//  res.status(400).json({error})   
// }
//     }


module.exports={createSkillAndSummary,updateSkillAndSummary,deleteSkill}