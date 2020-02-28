var mongoose = require("mongoose");
var SessionSchema = new mongoose.Schema({
   
    _id: mongoose.Schema.Types.ObjectId,
    treatment_id: { type: mongoose.Schema.Types.ObjectId, ref: "treatment-plan" },
    date: Date,
    dose: { type: String, max: 50, min: 1, required: true }
  
});

  var SessionModel = new mongoose.model("session", SessionSchema);
module.exports = SessionModel