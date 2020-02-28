var SessionModel = require("../models/common/session.model")

function SessionAPIS(app) {
  app.post("/insertsession", async (req, resp) => {
    let treatment_id = req.body.Treatment_id;
    let date = req.body.date;
    let dose = req.body.Dose; 

    let newSession = new SessionModel({
      _id: mongoose.Types.ObjectId(),
      treatment_id: treatment_id,
      date: date,
      dose: dose
    });
    await newSession.save();
    resp.json({ message: "success" });
  });

  app.get("/showsessions", async (req, resp) => {
    let sessions = await SessionModel.find({}).populate("session");
    resp.json(sessions);
  });
}

module.exports = SessionAPIS;
