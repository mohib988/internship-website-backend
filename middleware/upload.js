const multer=require("multer")
const path=require('path')

const storage=multer.diskStorage  ({destination:(req,file,cb)=>{
    cb(null,"./uploads/")
  },
  filename:(req,file,cb)=>{cb(null,Date.now()+path.extname(file.originalname))}})



const upload=multer({storage:storage,fileFilter:(req,file,cb)=>{
 if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){
cb(null,true)
}
else{
 cb(null,false)
}
}})

const uploadPdf=multer({storage:storage,fileFilter:(req,file,cb)=>{
 if(file.mimetype==="application/pdf"){
cb(null,true)
}
else{
 cb(null,false)
}
}})
module.exports={upload,uploadPdf}