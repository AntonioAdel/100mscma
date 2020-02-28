var MedicationModel = require("../models/MedicalOrganization/medication.model")

function MedicationAPIS(app) {
  app.post("/insertmedication", async (req, resp) => {
    let name = req.body.name;
    let category = req.body.category; 

    let newMedication = new MedicationModel({
      _id: mongoose.Types.ObjectId(),
      name: name,
      category: category
    });
    await newMedication.save();
    resp.json({ message: "success" });
  });

  app.get("/showmedication", async (req, resp) => {
    let medications = await MedicationModel.find({}).populate("medication");
    resp.json(medications);
  });
}

module.exports = MedicationAPIS;
