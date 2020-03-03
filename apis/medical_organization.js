//var HospitalModel = require("../models/MedicalOrganization/hospital.model");
var MedicalOrganizationModel = require("../models/MedicalOrganization/medical.org.model");
//var PhoneModel = require("../models/common/phone.model");

var mongoose = require("mongoose");

function HospitalAPIS(app) {
  app.post("/inserthospital", async (req, resp) => {
    try {
      app.get("/gethospitals", async (req, resp) => {
        let hospitals = await MedicalOrganizationModel.findOne({
          type: "Hospital"
        });
        resp.json(hospitals);
      });
    } catch (e) {
      resp.json(e);
    }
  });
}

module.exports = HospitalAPIS;
