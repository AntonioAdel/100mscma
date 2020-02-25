var mongoose = require("mongoose");
var uniqueNidValidator = require('mongoose-unique-validator');
var uniqueEmailValidator = require('mongoose-unique-validator');


//create schema
var CitizenSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  national_id: { type: Number, unique: true, required: true },
  first_name: { type: String, max: 15 },
  middle_name: { type: String, max: 15 },
  last_name: { type: String, max: 15 },
  email: { type: String, unique: true, required: true },
  password: { type: String, max: 50, min: 8, required: true },
  gender: Boolean,
  birth_date: Date,
  phone: { type: mongoose.Schema.Types.ObjectId, ref: "phone" },
  area: { type: mongoose.Schema.Types.ObjectId, ref: "area" },
  street: {type: mongoose.Schema.Types.ObjectId, ref: "street"} ,
  role: Number,
  verification: Boolean,
  pic_url: String,

});



// create model of schema to be enabled to do any query
var CitizenModel = new mongoose.model("citizen", CitizenSchema);
CitizenSchema.plugin(uniqueNidValidator, {message: 'nidExists'});
CitizenSchema.plugin(uniqueEmailValidator, {message: 'emailExists'});

module.exports = CitizenModel
