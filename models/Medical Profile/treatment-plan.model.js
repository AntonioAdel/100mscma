var mongoose = require("mongoose");
var TreatmentPlanSchema = new mongoose.Schema({
   
    _id: mongoose.Schema.Types.ObjectId,
    Medical_id: { type: mongoose.Schema.Types.ObjectId, ref: "medical-profile" },
    No_of_Sessions: { type: Number, required: true },
    Phase: { type: Number, required: true }
  
});

  var TreatmentPlanModel = new mongoose.model("treatment-plan", TreatmentPlanSchema);
module.exports = TreatmentPlanModel