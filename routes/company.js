const express =require("express"
);
const router =express.Router();
const {createCompanyProfile,getOnecompany}=require("../controller/companyInformation.js")
const {upload,uploadPdf}=require("../middleware/upload.js")


router.post("/createCompanyProfile",upload.single("image"),createCompanyProfile)
router.post("/getOneCompany",getOnecompany)



module.exports=router;