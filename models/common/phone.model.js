var mongoose = require("mongoose")

// create schema

var PhoneSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    phone: { type: String, required: true, minlength:8 ,maxlength: 15 },
})

var PhoneModel = new mongoose.model("phone", PhoneSchema)

module.exports = PhoneModel

