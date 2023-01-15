const mongoose=require("mongoose")
const experienceModel=require("../models/experience")
const educationModel=require("../models/education");
const { json } = require("express");



const addEducationOrExperience = async (req, res) => {
    try {
      
      req.body.startingDate = new Date(req.body.startingDate);
    req.body.endingDate = new Date(req.body.endingDate);
      const { type, userId } = req.body;
      if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No post with id}`);
      // Determine which model to use based on the type
      const models = { experience: experienceModel, education: educationModel };
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
      console.log(error)
    }
  };

  const updateEducationOrExperience = async (req, res) => {
    try {
      
      // Extract the type, id, and userId from the request body and params
      const { type, userId} = req.body;
      const { id} = req.params;

      if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No post with id}`);
      // Determine which model to use based on the type

      const models = { experience: experienceModel, education: educationModel };
      const model = models[type];
      if (!model) return res.status(400).json({ error: 'Invalid type' });
    
      // Retrieve the document from the database
      const object = await model.findOne({ userId: userId });
  
      // Update the appropriate array in the document
      const updated = object[type + 's'].map((i) => {
        if ((i._id).equals(id)) {
          i.instituteName = req.body.instituteName;
          i.startingDate = req.body.startingDate;
          i.endingDate = req.body.endingDate;
          i.description = req.body.description;   
        }
        return i;
      });
      // Update the document in the database
      const updatedDocument = await model.findOneAndUpdate(
        { userId: userId },
        { $set: { [type + 's']: updated } },
        { new: true }
      );
    
      // Send the updated document as a response
      res.status(201).json({ data: updatedDocument });
    } 
    catch (error) {
      res.status(401).json({ error:error });
      
    }
  };


  const deleteEducationOrExperience = async (req, res) => {
    // try {
      
      // Extract the type, id, and userId from the request body and params
      const { type,userId } = req.body;
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(userId)) return res.status(404).send(`No post with id}`);
    
      // Determine which model to use based on the type
      const models = { experience: experienceModel, education: educationModel };
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
        { userId: userId },
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


module.exports={updateEducationOrExperience,addEducationOrExperience,deleteEducationOrExperience}
