var mongoose = require("mongoose");

//create schema
var ManagerSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  manager_nid: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
  managerial_degree: { type: String }
});

// create model from schema to be enabled to do any query
var ManagerModel = new mongoose.model("manager", ManagerSchema);

module.exports = ManagerModel;
