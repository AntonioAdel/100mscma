var mongoose = require("mongoose");

//create schema
var Screening_result_Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  positive: { type: Boolean },
  degree: { type: Number },
  description: { type:String },
  citizen_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  testcenter_code: { type: mongoose.Schema.Types.ObjectId, ref: "testcenter" },
});

// create model from schema to be enabled to do any query
var Screening_result_Model = new mongoose.model("screening_result", Screening_result_Schema);

module.exports = Screening_result_Model;
