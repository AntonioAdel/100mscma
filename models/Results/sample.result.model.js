var mongoose = require("mongoose");

//create schema
var Sample_result_Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  result: { type: String },
  degree: { type: Number },
  description: { type:String },
  citizen_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  analysis_lab_code: { type: mongoose.Schema.Types.ObjectId, ref: "medicalanalysis" },
});

// create model from schema to be enabled to do any query
var Sample_result_Model = new mongoose.model("sample_result", Sample_result_Schema);

module.exports = Sample_result_Model;
