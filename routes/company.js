const express =require("express"
);
const router =express.Router();
const {createCompanyProfile}=require("../controller/companyInformation.js")
const {createJobPost,updateJobPost,searchJobPost,getJobPost}=require("../controller/jobPost.js")
const {upload,uploadPdf}=require("../middleware/upload.js")


router.post("/createCompanyProfile",upload.single("image"),createCompanyProfile)
router.post("/createJobPost",createJobPost)
router.post("/updateJobPost/:id",updateJobPost)
router.post("/search/query",searchJobPost)
router.post("/getPost/query",getJobPost)



module.exports=router;