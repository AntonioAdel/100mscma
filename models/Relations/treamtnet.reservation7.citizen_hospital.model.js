var mongoose = require("mongoose");
var CitizenHospitalSchema = new mongoose.Schema({
   
    _id: mongoose.Schema.Types.ObjectId,
    Citizen_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
    date: { type: Date },
    time: { type: Number }

  
});

  var CitizenHospitalModel = new mongoose.model("citizen-hospital", CitizenHospitalSchema);
module.exports =CitizenHospitalModel