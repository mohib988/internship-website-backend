const express =require("express"
);
const router =express.Router();
const {upload,uploadPdf}=require("../middleware/upload.js")
const auth=require("../middleware/authentication")
const {signup,signin}=require("../controller/signupAndSignin.js")
const {createProfile,getUser,getAllUser, uploadCv}=require("../controller/userInformation.js")
const {addProjectOrCourse,updateProjectOrCourse,deleteProjectOrCourse,uploadMyPdf}=require("../controller/projectAndCourse.js")
const {addEducationOrExperience,updateEducationOrExperience,deleteEducationOrExperience}=require("../controller/educationAndExperience.js")
const {createSkillAndSummary,updateSkillAndSummary,deleteSkill}=require("../controller/skillAndSummary.js")



router.post("/signin",signin)
router.post("/signup",signup)
router.post("/uploadCv",upload.single("image"),uploadCv)

// router.post("/signup",upload.single("image"),signup)
router.post("/createprofile",upload.single("image"),createProfile)



//* course and project crud
router.post("/addProjectAndCourse",auth,addProjectOrCourse)
router.post("/deleteProjectAndCourse/:id",auth,deleteProjectOrCourse)
router.post("/updateProjectAndCourse/:id",auth,updateProjectOrCourse)
router.post("/uploadpdf",uploadPdf.single("pdf"),uploadMyPdf)
router.get("/getuser/:userId",getUser)
router.get("/getAllUser/query",getAllUser)

//* education and experience crud

router.post("/addEducationAndExperience",auth,addEducationOrExperience)
router.post("/updateEducationAndExperience/:id",auth,updateEducationOrExperience)
router.post("/deleteeducationAndexperience/:id",auth,deleteEducationOrExperience)


//*skill and summary crud
router.post("/createSkillAndSummary",auth,createSkillAndSummary)
router.post("/SkillAndSummaryUpdate",auth,updateSkillAndSummary)
router.post("/deleteSkill",auth,deleteSkill)
// console.log(signup());
// router.post("/signin",signin)
module.exports=router;