var mongoose = require("mongoose");

//create schema
var Doctor_Medical_OrgSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  medical_org_code: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" },
  doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: "doctor" },
});

// create model from schema to be enabled to do any query
var Doctor_Medical_OrgModel = new mongoose.model("doctor_medical_org", Doctor_Medical_OrgSchema);

module.exports = Doctor_Medical_OrgModel;
