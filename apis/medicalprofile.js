var MedicalProfileModel = require("../models/Citizen/medical-profile.model")

function MedicalProfileAPIS(app) {
  app.post("/insertmedicalprofile", async (req, resp) => {
    let Citizen_id = req.body.Citizen_id;
    let Clerk_id = req.body.Clerk_id; 
    let Medical_Description = req.body.Medical_Description;

    let newmedicalprofile= new MedicalProfileModel({
      _id: mongoose.Types.ObjectId(),
      Citizen_id: Citizen_id,
      Clerk_id: Clerk_id,
      Medical_Description: Medical_Description
    
    });
    await newmedicalprofile.save();
    resp.json({ message: "success" });
  });

  app.get("/showmedicalprofile", async (req, resp) => {
    let medicalprof = await MedicalProfileModel.find({}).populate("medical-profile");
    resp.json(medicalprof);
  });
}

module.exports = MedicalProfileAPIS;