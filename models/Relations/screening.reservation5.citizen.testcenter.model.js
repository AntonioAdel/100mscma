var mongoose = require("mongoose");

//create schema
var Screening_reservation_Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  citizen_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  testcenter_code: { type: mongoose.Schema.Types.ObjectId, ref: "testcenter" },
  date: { type: Date },
  time: { type: Date },
  attendance: { type: Boolean}
  
});

// create model from schema to be enabled to do any query
var Screening_reservation_Model = new mongoose.model("Screening_reservation", Screening_reservation_Schema);

module.exports = Screening_reservation_Model;
