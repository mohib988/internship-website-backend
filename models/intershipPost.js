const mongoose =require("mongoose")
const company=require("./companyInformation.js")

const postModel=mongoose.Schema({
companyId:{type:mongoose.SchemaTypes.ObjectId,required:true,ref:company},
jobTitle:{type: String,
  set: (val) => ucfirst(val)},
jobDescription:{type:String,required:true},
jobRequirements:{type:String},
remote:{ type: Boolean,
    required: true},
  location:{type:String,
      required: function() {
          return !this.remote;
        }
  },
paid:{
    type: Boolean,
    required:  true
}
, price: {
    type: Number,
    required: function() {
      return this.paid;
    },
    validate: function(value) {
      return this.paid || !value;
    }
  },
  contactNo:{type:Number}
  
})
module.exports=mongoose.model("Job Posts",postModel)