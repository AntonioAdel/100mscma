var HospitalModel = require("../models/MedicalOrganization/hospital.model");
var MedicalOrganizationModel = require("../models/MedicalOrganization/medical.org.model");
var PhoneModel = require("../models/common/phone.model");


var mongoose = require("mongoose");

function HospitalAPIS(app) {
  app.post("/inserthospital", async (req, resp) => {
    //   let name = req.body.name;
    //   let doctors = req.body.doctors; //array

    //   let newHospital = new HospitalModel({
    //     _id: mongoose.Types.ObjectId(),
    //     name: name,
    //     doctors: doctors
    //   });
    //   await newHospital.save();
    //   resp.json({ message: "success" });
    // });

    try {
      const {
        name,
        pic_url,
        address,
        from,
        to,
        phone,
        type,
        capacity,
        lat,
        long
      } = req.body;


      //save phone
      let newPhone = new PhoneModel({
        _id: mongoose.Types.ObjectId(),
        phone: phone
      });
      await newPhone.save();


      //save medical organization and link phone
      let newMedicalOrg = new MedicalOrganizationModel({
        _id: mongoose.Types.ObjectId(),
        name: name,
        pic_url: pic_url,
        from: from,
        to: to,
        address:address,
        type: type,
        phone: newPhone._id
      });
      await newMedicalOrg.save();

      
      //save hospital and link medical organization
      let newHospital = new HospitalModel({
        _id: mongoose.Types.ObjectId(),
        lat: lat,
        lng: long,
        capacity: capacity,
        medical_org: newMedicalOrg._id
      });
      await newHospital.save();


      resp.json({ message: "success" });
    } catch (e) {
      resp.json(e);
    }
  });




  app.get("/hospitals", async (req, resp) => {
    //let hospitals = await HospitalModel.find({}).populate("doctors");
    let hospitals = await HospitalModel.find({}).populate("medical_org");//.populate("phone");
    resp.json(hospitals);
  });
}

module.exports = HospitalAPIS;
