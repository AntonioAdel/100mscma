var mongoose = require("mongoose");
var AwarenessCampaignModel = require("../models/awareness_campaign.model");

function AwarenessCampaignAPIS(app) {

    //add new awareness campaign

    app.post("/addAwarenessCampaign", async(req, resp) => {
        const { date, time, place } = req.body
        let AwarenessCampaign = new AwarenessCampaignModel({
            _id: mongoose.Types.ObjectId(),
            date,
            time,
            place,

        });
        await AwarenessCampaign.save();
        resp.json({ message: 'success' });
    });

    // api get date , time , place of awareness Campaign

    app.get("/getAwarenessCampaign", async(req, resp) => {
        var AwarenessCampaign = await AwarenessCampaignModel.find({}); // async
        resp.json(AwarenessCampaign);
    });

    // update awareness campaign
    app.post("/updateawarenessinfo", async(req, resp) => {
        let CampaignId = req.body.id;
        let NewTitle = req.body.title;
        let NewTime = req.body.time;
        let NewDate = req.body.date;
        let NewPlace = req.body.place;
        await AwarenessCampaignModel.findOneAndUpdate({ _id: CampaignId }, { title: NewTitle, time: NewTime, date: NewDate, place: NewPlace });
        resp.json({ message: "updated" });
    });
    // get awareness campaign count 
    app.get("/getcampaigncount", Utils.Authentication, async(req, resp) => {
        let count = await AwarenessCampaignModel.count();
        resp.json({ count: count });
    });
}
module.exports = AwarenessCampaignAPIS;