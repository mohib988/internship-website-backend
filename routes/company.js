const express =require("express"
);
const router =express.Router();
const {createCompanyProfile}=require("../controller/companyInformation.js")
const {createJobPost}=require("../controller/jobPost.js")
const {upload,uploadPdf}=require("../middleware/upload.js")


router.post("/createCompanyProfile",upload.single("image"),createCompanyProfile)
router.post("/createJobPost",createJobPost)



module.exports=router;