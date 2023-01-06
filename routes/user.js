const express =require("express"
);
const router =express.Router();
const {upload,uploadPdf}=require("../middleware/upload.js")
const {signup}=require("../controller/signupAndSignin.js")
const {createProfile}=require("../controller/userInformation.js")
const {addProjectOrCourse,updateProjectOrCourse,deleteProjectOrCourse,uploadMyPdf}=require("../controller/projectAndCourse.js")
const {addEducationOrExperience,updateEducationOrExperience,deleteEducationOrExperience}=require("../controller/educationAndExperience.js")
const {createSkillAndSummary,updateSkillAndSummary}=require("../controller/skillAndSummary.js")


// router.post("/signup",upload.single("image"),signup)
// router.post("/addcourse",addProjectOrCourse)
router.post("/addeducation",addEducationOrExperience)
// router.post("/createprofile",upload.single("image"),createProfile)
router.post("/deleteprojectorcourse/:userId",deleteProjectOrCourse)
router.post("/uploadpdf",uploadPdf.single("pdf"),uploadMyPdf)

// router.post("/updateproject/:id",updateProject)
router.post("/updateeducationorexperience",updateEducationOrExperience)
router.post("/createSkillAndSummary",createSkillAndSummary)
router.post("/updateSkillAndSummary",updateSkillAndSummary)
// console.log(signup());
// router.post("/signin",signin)
module.exports=router;