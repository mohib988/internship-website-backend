const express =require("express"
);
const router =express.Router();
const {upload,uploadPdf}=require("../middleware/upload.js")
const {signup,signin}=require("../controller/signupAndSignin.js")
const {createProfile,getUser,getAllUser}=require("../controller/userInformation.js")
const {addProjectOrCourse,updateProjectOrCourse,deleteProjectOrCourse,uploadMyPdf}=require("../controller/projectAndCourse.js")
const {addEducationOrExperience,updateEducationOrExperience,deleteEducationOrExperience}=require("../controller/educationAndExperience.js")
const {createSkillAndSummary,updateSkillAndSummary,deleteSkill}=require("../controller/skillAndSummary.js")



router.post("/signin",signin)

// router.post("/signup",upload.single("image"),signup)
// router.post("/createprofile",upload.single("image"),createProfile)



//* course and project crud
router.post("/addProjectAndCourse",addProjectOrCourse)
router.post("/deleteProjectAndCourse/:id",deleteProjectOrCourse)
router.post("/updateProjectAndCourse/:id",updateProjectOrCourse)
router.post("/uploadpdf",uploadPdf.single("pdf"),uploadMyPdf)
router.get("/getuser/:userId",getUser)
router.get("/getAllUser/query",getAllUser)

//* education and experience crud

router.post("/addEducationAndExperience",addEducationOrExperience)
router.post("/updateEducationAndExperience/:id",updateEducationOrExperience)
router.post("/deleteeducationAndexperience/:id",deleteEducationOrExperience)


//*skill and summary crud
router.post("/createSkillAndSummary",createSkillAndSummary)
router.post("/updateSkillAndSummary",updateSkillAndSummary)
router.post("/deleteSkill",deleteSkill)
// console.log(signup());
// router.post("/signin",signin)
module.exports=router;