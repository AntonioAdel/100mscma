var CitizenHospitalModel = require("../models/Citizen/citizen-hospital.model")

function CitizenHospitalAPIS(app) {
  app.post("/insertcitizenhospital", async (req, resp) => {
    let Citizen_id = req.body.Citizen_id;
    let date = req.body.date; 
    let time = req.body.time;

    let newcitizenhopsital = new CitizenHospitalModel({
      _id: mongoose.Types.ObjectId(),
      Citizen_id: Citizen_id,
      date: date,
      time: time
    });
    await newcitizenhopsital.save();
    resp.json({ message: "success" });
  });

  app.get("/showcitizenhosptial", async (req, resp) => {
    let citizenhosp = await CitizenHospitalModel.find({}).populate("citizen-hosptial");
    resp.json(citizenhosp);
  });
}

module.exports = CitizenHospitalAPIS;
