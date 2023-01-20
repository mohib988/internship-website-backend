const nodemailer = require('nodemailer');
const userInformation=require("../models/userinfo.js")
const skillAndSummaryModel=require("../models/skillAndSummary")
const postModel=require("../models/intershipPost.js")
// create a transporter object to send email
const sendMail=async (req,res)=>{

    const {userId,postId,jobTitle,email}=req.body
    const user=await userInformation.findOne({userId:userId})
    console.log(email)
    const summaryAndSkill=await skillAndSummaryModel.findOne({userId:userId})
    console.log({...summaryAndSkill.skill})
    const transporter = nodemailer.createTransport({
        service: 'gmail', // use a service like Gmail
  auth: {
    user: 'qureshimohib819@gmail.com', // your email address
    pass: 'ahndzuozhlfjqdav' // your email password
  }
});

const mailOptions = {
  from: 'qureshimohih819@gmail.com', 
  to: `${email}`, 
  subject: `${user.name} application for ${jobTitle}`, 
html:
`
<h3>${user.name} application for ${jobTitle}</h3>
<h3>${user.name} description</h3>
<p>${summaryAndSkill.summary}</p>
<h3>${user.name} skill</h3>
<ul>${summaryAndSkill.skill.map((i)=>{
  return `<li>${i}</li>`
})}</ul>
<h3>${user.name} cv</h3>
<a href=${"https://elegant-gabardine-dove.cyclic.app/"+user.cv}>${user.name} cv</a>


`
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
const postit=await postModel.findByIdAndUpdate({_id:postId},{$push:{applied:userId}})
    }
module.exports={sendMail}