const mongoose=require("mongoose")

const userInformation=require("../models/userinfo.js")
const userModel=require("../models/user.js")
const skillAndSummaryModel=require("../models/skillAndSummary")
const projectModel=require("../models/project.js")
const educationModel=require("../models/education.js")
const experienceModel=require("../models/experience.js")
const courseModel=require("../models/course.js")




const createProfile=async (req,res)=>{
let {gender,field,phoneNo,name,skill,summary,instituteName,startingDate,endingDate,instituteNameE,startingDateE,endingDateE,description,descriptionE,country,address}=req.body

const image=req.file.path
skill=skill.split(/[,+/\s]+/)
endingDate=new Date(endingDate)
startingDate=new Date(startingDate)
startingDateE=new Date(startingDateE)
endingDateE=new Date(endingDateE)
const userId="63c16ca4c23c40eaa6ae72e5"
// const genderSmall=new RegExp(gender,"i")
const createInformation=await userInformation.create({name:name,gender,field:field,phoneNo:phoneNo,profilePicture:image,userId,country,address})

const education= await educationModel.findOneAndUpdate(
    { userId: userId },
    { $push: { educations: {
        instituteName:instituteNameE,
        startingDate:startingDateE,
        endingDate:endingDateE,
        description:descriptionE,
    } } },
    { new: true, upsert: true }
  );

const experience= await experienceModel.findOneAndUpdate(
    { userId: userId },
    { $push: { experiences: {
        instituteName,
        startingDate,
        endingDate,
        description
    } } },
    { new: true, upsert: true }
  );

  const createdSkillAndSummary=await skillAndSummaryModel.create({userId,summary,skill})
res.status(201).json({data:createInformation})
console.log(image)
console.log({...req.body})
}


const getUser=async (req,res)=>{
    try{

        const {userId}=req.params
        // const genderSmall=new RegExp(gender,"i")
const user= await userInformation.findOne({userId:userId})
const useremail= await userModel.findOne({_id:userId},"email")
const summary=await skillAndSummaryModel.findOne({userId:userId})
const education=await educationModel.findOne({userId:userId})
const course=await courseModel.findOne({userId:userId})
const experience=await experienceModel.findOne({userId:userId})
const project=await projectModel.findOne({userId:userId})
// result=Object.assign({}, user, summary);

res.status(201).json({data:{...(user?._doc),...(summary?._doc),...(experience?._doc),...(project?._doc),...(course?._doc),...(education?._doc),...(useremail._doc)}})
    }
    catch(error){
        res.status(404).json({error})
    }
}



const getAllUser=async (req,res)=>{

// const genderSmall=new RegExp(gender,"i")
    const {page}=req.query
    const limit=8;
    const start=(Number(page) -1)*limit


    const data=await userInformation.find({}).limit(limit).skip(start)

res.status(201).json({data:data})
}

const uploadCv=async (req,res)=>{

// const genderSmall=new RegExp(gender,"i")

const id=(req.body.id).toString()
const cv=req.file.path
const data=await userInformation.findOneAndUpdate({userId:id},{$set:{cv:cv}})
res.status(201).json({data:data})
}
module.exports={createProfile,getUser,getAllUser,uploadCv}

