var TreatmentModel = require("../models/common/treatment-plan.model")

function TreatmentAPIS(app) {
  app.post("/inserttreatmentplan", async (req, resp) => {
    let Medical_id = req.body.Medical_id;
    let No_Of_Sessions = req.body.No_Of_Sessions; 
    let Phase = req.body.Phase; 

    let newTreatmentPlan = new TreatmentModel({
      _id: mongoose.Types.ObjectId(),
      Medical_id: Medical_id,
      No_Of_Sessions: No_Of_Sessions,
      Phase: Phase
    });
    await newTreatmentPlan.save();
    resp.json({ message: "success" });
  });

  app.get("/showTreatmentPlan", async (req, resp) => {
    let treatments = await TreatmentModel.find({}).populate("treatment-plan");
    resp.json(treatments);
  });
}

module.exports = TreatmentAPIS;
