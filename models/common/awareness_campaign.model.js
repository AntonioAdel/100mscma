var mongoose = require(mongoose);
var AwarenessCampaignSchema = new mongoose.schema({
_id: mongoose.Schema.Types.ObjectId,
date:date,
time:time,
title:string,
street:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "street"
    },
manager:{
    type: mongoose.Schema.Types.ObjectId,
        ref: "manager"
}
})
var AwarenessCampaignModel = new mongoose.model("AwarenessCampaign", AwarenessCampaignSchema)

module.exports = AwarenessCampaignModel