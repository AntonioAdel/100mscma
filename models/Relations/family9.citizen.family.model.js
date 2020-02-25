var mongoose = require("mongoose");

//create schema
var FamilySchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  citizen_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  relative_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  relationship: { type: String }
});

// create model from schema to be enabled to do any query
var FamilyModel = new mongoose.model("family", FamilySchema);

module.exports = FamilyModel;
