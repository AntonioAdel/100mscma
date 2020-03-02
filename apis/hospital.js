var HospitalModel = require("../models/MedicalOrganization/hospital.model");
var MedicalOrganizationModel = require("../models/MedicalOrganization/medical.org.model");
var PhoneModel = require("../models/common/phone.model");

var mongoose = require("mongoose");

function HospitalAPIS(app) {
  app.post("/inserthospital", async (req, resp) => {
  
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
        website,
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
        address: address,
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
        website: website,
        medical_org: newMedicalOrg._id
      });
      await newHospital.save();

      resp.json({ message: "success" });
    } catch (e) {
      resp.json(e);
    }
  });



  app.get("/getallhospitals", async (req, resp) => {
    let hospitals = await HospitalModel.find({}).populate({
      path: "medical_org",
      populate: {
        path: "phone",
        model: "phone"
      }
    });
    resp.json(hospitals);
  });




  // app.get("/getallhospitals", async (req, resp) => {
  //   let hospitals = await HospitalModel.find({}).project({ _id : true, /*serialno : 1*/ }).populate("medical_org");
  //   //.project({ _id : true, name:true, address:true, pic_url:true });
  //   resp.json(hospitals);
  // });






app.post("/getHospitalDetails", async (req, resp) => {
  try {
    let code  = req.body.hos_code;
    let hospital = await HospitalModel.findById({"_id": code}).populate({
      path: "medical_org",
      populate: { 
        path: "phone",
        model: "phone"
      }
    });
    resp.json({ message: "success", hospital });
    //resp.json(hospital);
  } catch (e) {
    resp.json(e);
  }
});

}


module.exports = HospitalAPIS;
