var mongoose = require("mongoose");
var MedicalProfileSchema = new mongoose.Schema({
   
    _id: mongoose.Schema.Types.ObjectId,
    Citizen_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
    Clerk_id: { type: mongoose.Schema.Types.ObjectId, ref: "street" },
    Medical_Description: { type: String, max: 50, min: 8, required: true }
  
});

  var MedicalProfileModel = new mongoose.model("medical-profile", MedicalProfileSchema);
module.exports = MedicalProfileModel
