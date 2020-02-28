var MedicationTreatmentModel = require("../models/MedicalOrganization/medication-treatment.model")

function MedicationTreatmentAPIS(app) {
  app.post("/insertmedicationtreatment", async (req, resp) => {
    let Qty = req.body.Qty;
    let date = req.body.Street_date; 
    let newmedicationtreatment = new MedicationTreatmentModel({
      _id: mongoose.Types.ObjectId(),
      Qty: Qty,
     date: date
        });
    await newmedicationtreatment.save();
    resp.json({ message: "success" });
  });

  app.get("/showmedicationtreatment", async (req, resp) => {
    let mtreatments = await MedicationTreatmentModel.find({}).populate("medication-treatment");
    resp.json(mtreatments);
  });
}

module.exports = MedicationTreatmentAPIS;