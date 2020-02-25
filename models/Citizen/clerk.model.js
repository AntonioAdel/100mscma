var mongoose = require("mongoose")

// create schema

var ClerkSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    clerk_id: { type: mongoose.Schema.Types.ObjectId, ref: "citizen" },
    medical_org: { type: mongoose.Schema.Types.ObjectId, ref: "medicalorg" }
})

var ClerkModel = new mongoose.model("clerk", ClerkSchema)

module.exports = ClerkModel

