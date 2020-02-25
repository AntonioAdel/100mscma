var mongoose = require(mongoose);
var DoctorAwarenessCampaignSchema = new mongoose.schema({
    _id: mongoose.Schema.Types.ObjectId,
    citizen: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "citizen"
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "doctor"
    },
    clerk: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "clerk"
    },
    historydesc: string
})
var DoctorAwarenessCampaignModel = new mongoose.model("DoctorAwarenessCampaig", DoctorAwarenessCampaignSchema);
module.exports = DoctorAwarenessCampaignModel;