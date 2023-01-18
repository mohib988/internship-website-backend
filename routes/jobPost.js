const express =require("express"
);
const router =express.Router();
const {createJobPost,updateJobPost,searchJobPost,getJobPost,deleteJobPost,getPostByArea}=require("../controller/jobPost.js")
const {sendMail}=require("../controller/sendmail.js")


router.post("/createJobPost",createJobPost)
router.post("/updateJobPost/:id",updateJobPost)
router.post("/deleteJobPost/:id",deleteJobPost)
router.get("/search/query",searchJobPost)
router.get("/getPost/query",getJobPost)
router.post("/applyForJob",sendMail)
router.post("/getPostByArea",getPostByArea)

module.exports=router;