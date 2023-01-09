const express =require("express"
);
const router =express.Router();
const {createJobPost,updateJobPost,searchJobPost,getJobPost}=require("../controller/jobPost.js")


router.post("/createJobPost",createJobPost)
router.post("/updateJobPost/:id",updateJobPost)
router.get("/search/query",searchJobPost)
router.get("/getPost/query",getJobPost)

module.exports=router;