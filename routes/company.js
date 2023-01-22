const express =require("express"
);
const router =express.Router();
const {createCompanyProfile,getOnecompany,getCompany,updateEmail}=require("../controller/companyInformation.js")
const {upload,uploadPdf}=require("../middleware/upload.js")


router.post("/createCompanyProfile",upload.single("image"),createCompanyProfile)
router.get("/getOneCompany/:id",getOnecompany)
router.get("/getAllCompany/query",getCompany)
router.post("/updateEmail",updateEmail)



module.exports=router;