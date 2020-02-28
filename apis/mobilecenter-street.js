var MobileStreetModel = require("../models/MedicalOrganization/TestCenter/mobilecenter-street.model")

function MobilestreetAPIS(app) {
  app.post("/insertmobilestreet", async (req, resp) => {
    let Mobile_id = req.body.Mobile_id;
    let Street_id = req.body.Street_id; 
    let No_Of_Security_car = req.body.No_Of_Security_car; 
    let No_of_Security_person = req.body.No_of_Security_person;
    let From = req.body.From;
    let To = req.body.To;
    let newmobilestreet = new MobileStreetModel({
      _id: mongoose.Types.ObjectId(),
      Mobile_id: Mobile_id,
     Street_id: Street_id,
     No_Of_Security_car: No_Of_Security_car,
     No_of_Security_person: No_of_Security_person,
     From: From,
     To: To
    });
    await newmobilestreet.save();
    resp.json({ message: "success" });
  });

  app.get("/showmobilestreet", async (req, resp) => {
    let treatments = await MobileStreetModel.find({}).populate("treatment-plan");
    resp.json(treatments);
  });
}

module.exports = MobilestreetAPIS;
