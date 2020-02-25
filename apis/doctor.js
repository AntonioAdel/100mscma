var DoctorModel = require("../models/Citizen/doctor.model");
var CitizenModel = require("../models/Citizen/citizen.model");
var PhoneModel = require("../models/common/phone.model");
var StreetModel = require("../models/Address/street.model");
var mongoose = require("mongoose");
var Utils = require('../util/index')

function DoctorAPIS(app) {
 
  app.post("/adddoctor", async (req, resp) => {
    try {
      const { national_id, 
              first_name, 
              middle_name, 
              last_name, 
              email,
              password, 
              gender,
              pic_url, 
              birth_date, 
              role, 
              verification, 
              street, 
              area,
              phone_num,
              spec} = req.body


      //save street and area code
      let newStreet = new StreetModel({
        _id: mongoose.Types.ObjectId(),
        name: street, area
      })
      await newStreet.save()

      //save phone
      let newPhone = new PhoneModel({
        _id: mongoose.Types.ObjectId(),
        phone: phone_num
      })
      await newPhone.save()

      //save citizen
      let citizen = new CitizenModel({
              _id: mongoose.Types.ObjectId(),
               national_id, 
               first_name, 
               middle_name, 
               last_name,
                email,
               password, 
               gender,
               pic_url, 
               birth_date, 
               role, 
               verification, 
               street, 
               phone:newPhone._id, 
               street: newStreet._id
      })
      await citizen.save(); // async --> save citizen

      let doctor = new DoctorModel({
        _id: mongoose.Types.ObjectId(),
        //nid: nid,
        citizen: citizen._id,
        specialization: spec
      })
      await doctor.save(); // async


      resp.json({ message: "success" });
    } catch (e) {
      resp.json(e);
    }
  });


  app.get("/getalldoctors", Utils.Authentication,async (req, resp) => {
    try {
      let doctors = await DoctorModel.find({}).populate({path:"citizen", populate: Utils.address})
      resp.json(doctors);
    } catch (e) {
      resp.json(e);
    }
  });









  //////////***************************************************************///////////////
  app.post("/getdoctorbyname", async (req, resp) => {
    try {
      //let first_name = req.body.first_name;
      //.populate("citizen")
     // let doctors = await DoctorModel.citizen.findOne({ first_name: first_name })

      let { first_name } = req.body;
      let citizen = await CitizenModel.findOne({ first_name:first_name }).populate("citizen");
      let doctor = await DoctorModel.findOne({_id:citizen._id})//.populate({path:"citizen", populate: Utils.address})
      resp.json(doctor);

    } catch (e) {
      resp.json(e);
    }
  });



  app.post("/getdoctorbynames", async (req, resp) => {
    try {
      let name = req.body.name;
      //.populate("citizen")
      let doctors = await CitizenModel.findOne({ first_name: name }).populate("citizen");
      let doctor = await DoctorModel.findOne({ _id: doctors._id });

      // let doctorrrrr = new DoctorModel({
      //   citizen: doctors,
      //   specialization: doctor.specialization
      // });
      resp.json(doctor);
    } catch (e) {
      resp.json(e);
    }
  });




  // app.get("/getdoctorscount", async (req, resp) => {
  //   let count = await DoctorModel.count();
  //   resp.json({ count: count });
  // });

  // app.post("/removedoctor", async (req, resp) => {
  //   let doctorId = req.body.id;
  //   await DoctorModel.remove({ _id: doctorId });
  //   resp.json({ message: "deleted" });
  // });

  // app.post("/updatedoctorname", async (req, resp) => {
  //   let doctorId = req.body.id;
  //   let newName = req.body.name;
  //   let spec = req.body.specialization;

  //   await DoctorModel.findOneAndUpdate(
  //     { _id: doctorId },
  //     { name: newName, specialization: spec }
  //   );
  //   resp.json({ message: "updated" });
  // });

  // app.get("/getdoctornames",async(req,resp)=>{
  //     let doctors = await DoctorModel.find({}).select("name age")
  //     resp.json(doctors)

  // })
}

module.exports = DoctorAPIS;
