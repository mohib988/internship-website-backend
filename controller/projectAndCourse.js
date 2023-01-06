const projectModel=require("../models/project")
const courseModel=require("../models/course")



const addProjectOrCourse = async (req, res) => {
    try {
      

      const { type, userId } = req.body;
    
      // Determine which model to use based on the type
      const models = { project: projectModel, course: courseModel };
      const model = models[type];
      if (!model) return res.status(400).json({ error: 'Invalid type' });
  
      // Update the document in the database
      const updatedDocument = await model.findOneAndUpdate(
        { userId: userId },
        { $push: { [type + 's']: req.body } },
        { new: true, upsert: true }
      );
    
      // Send the updated document as a response
      res.status(201).json({ data: updatedDocument });
    } catch (error) {
      res.status(401).json({data: "something wrong " });
      
    }
  };

  const updateProjectOrCourse = async (req, res) => {
    try {
      
      // Extract the type, id, and userId from the request body and params
      const { type, userId } = req.body;
      const { id} = req.params;
    
      // Determine which model to use based on the type
      const models = { project: projectModel, course: courseModel };
      const model = models[type];
      if (!model) return res.status(400).json({ error: 'Invalid type' });
    
      // Retrieve the document from the database
      const object = await model.findOne({ userId: userId });
    
      // Update the appropriate array in the document
      const updated = object[type + 's'].map((i) => {
        if (i._id.equals(id)) {
          i.title = req.body.title;
          i.description = req.body.description; 
          i.courseName = req.body.courseName;
          i.institute = req.body.institute;
        }
        return i;
      });
    
      // Update the document in the database
      const updatedDocument = await model.findOneAndUpdate(
        { _id: userId },
        { $set: { [type + 's']: updated } },
        { new: true }
      );
    
      // Send the updated document as a response
      res.status(201).json({ data: updatedDocument });
    } 
    catch (error) {
      res.status(401).json({ Error: "something wrong" });
      
    }
  };


  const deleteProjectOrCourse = async (req, res) => {
    // try {
      
      // Extract the type, id, and userId from the request body and params
      const { type,  userId} = req.body;
      const { id } = req.params;
    
      // Determine which model to use based on the type
      const models = { project: projectModel, course: courseModel };
      const model = models[type];
      if (!model) return res.status(400).json({ error: 'Invalid type' });
    
      // Retrieve the document from the database
      const object = await model.findOne({ userId: userId });
    
      // Update the appropriate array in the document
      const updated = object[type + 's'].filter((i) => {

          return !(i._id.equals(id));
      });
    
      // Update the document in the database
      const updatedDocument = await model.findOneAndUpdate(
        { _id: userId },
        { $set: { [type + 's']: updated } },
        { new: true }
      );
    
      // Send the updated document as a response
      res.status(201).json({ data: updatedDocument });
    // } 
    // catch (error) {
    //   res.status(401).json({ error });
      
    // }
  };
const uploadMyPdf=(req,res)=>{
const pdf=req.file.path
console.log(pdf)
}

module.exports={updateProjectOrCourse,addProjectOrCourse,deleteProjectOrCourse,uploadMyPdf}
