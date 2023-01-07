const express =require("express"
);
const router =express.Router();
const {createJobPost,updateJobPost,searchJobPost,getJobPost}=require("../controller/jobPost.js")


router.post("/createJobPost",createJobPost)
router.post("/updateJobPost/:id",updateJobPost)
router.post("/search/query",searchJobPost)
router.post("/getPost/query",getJobPost)

module.exports=router;