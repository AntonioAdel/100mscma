var mongoose = require("mongoose");
var MobilecenterStreetSchema = new mongoose.Schema({
   
    _id: mongoose.Schema.Types.ObjectId,
    Mobile_id: { type: mongoose.Schema.Types.ObjectId, ref: "testcenter" },
    Street_id: { type: mongoose.Schema.Types.ObjectId, ref: "street" },
    No_of_Security_car: { type: Number, required: true },
    No_of_Security_person: { type: Number, required: true },
    From: { type: String, max: 50, min: 1, required: true },
    To: { type: String, max: 50, min: 1, required: true }
  
});

  var MobilecenterStreetModel = new mongoose.model("mobilecenter-street", MobilecenterStreetSchema);
module.exports = MobilecenterStreetModel