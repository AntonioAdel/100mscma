var mongoose = require("mongoose");

var HospitalSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  lat: Number,
  lng: Number,
  capacity: Number,
  website: String,
  medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalOrg" },
 // doctors: [{ type: mongoose.Schema.Types.ObjectId, ref: "doctor" }],

});

var HospitalModel = new mongoose.model("hospital", HospitalSchema);

module.exports = HospitalModel;
