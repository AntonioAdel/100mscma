var mongoose = require(mongoose);
var HospitalDoctorCitizenSchema = new mongoose.schema({
_id: mongoose.Schema.Types.ObjectId,
citizen: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "citizen"
},
doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor"
},
hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "hospital"
}, 
AssignDate: {Type.date},
LeaveDate:,
})
var HospitalDoctorCitizenModel = new mongoose.model("HospitalDoctorCitizen", HospitalDoctorCitizenSchema)

module.exports = HospitalDoctorCitizenModel