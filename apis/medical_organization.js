//var HospitalModel = require("../models/MedicalOrganization/hospital.model");
var MedicalOrganizationModel = require("../models/MedicalOrganization/medical.org.model");
//var PhoneModel = require("../models/common/phone.model");//

var mongoose = require("mongoose");

function HospitalAPIS(app) {
  app.get("/gethospitals", async (req, resp) => {
    try {
      let hospitals = await MedicalOrganizationModel.find({
        type: "Hospital"
      });
      resp.json(hospitals);
    } catch (e) {
      resp.json(e);
    }
  });
}

module.exports = HospitalAPIS;
