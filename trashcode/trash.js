// const addCourse=async (req,res)=>{
// const {courseName,institute,userId}=req.body

// const updatedCourse=await courseModel.findOneAndUpdate({userId:userId},
//     {$push:{courses:{courseName:courseName,institute:institute},}
// },{new:true,upsert:true},)


// res.status(201).json({data:updatedCourse})

 
// }


// const addProject=async (req,res)=>{
//     const {title,description,userId}=req.body

// const updatedProject=await projectModel.findOneAndUpdate({userId:userId},
//     {$push:{projects:{title:title,description:description},}



// },{new:true,upsert:true},)


// res.status(201).json({data:updatedProject})

 
// }



const updateProject=async (req,res)=>{
    const {title,description,id}=req.body
    const {userId}=req.params
const object=await projectModel.findOne({_id:userId})
const updated=object.projects.map((i)=>{
    if(i._id==id){
        i.description=description
        i.title=title
    }
    return i
})

const updatedProject=await projectModel.findOneAndUpdate({_id:userId},
{$set:{projects:updated}}, 
{new:true})


res.status(201).json({data:updatedProject})

 
}