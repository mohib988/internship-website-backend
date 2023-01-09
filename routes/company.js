const express =require("express"
);
const router =express.Router();
const {createCompanyProfile,getOnecompany,getCompany}=require("../controller/companyInformation.js")
const {upload,uploadPdf}=require("../middleware/upload.js")


router.post("/createCompanyProfile",upload.single("image"),createCompanyProfile)
router.get("/getOneCompany/:id",getOnecompany)
router.get("/getAllCompany/query",getCompany)



module.exports=router;