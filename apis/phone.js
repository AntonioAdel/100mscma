var mongoose = require("mongoose");
var phoneModel = require("../models/phone.model");
var CitizenModel = require("../models/citizen.model");

function phoneAPIS(app) {
    // getcitizenbyphone
    app.post("/getcitizenbyphone", Utils.Authentication, async(req, resp) => {
        let { phone } = req.body;
        let citizen = await CitizenModel.findOne({ phone });
        resp.json(citizen);
    });

    //remove phone 
    app.post("/removephone", async(req, resp) => {
        let CitizenId = req.body.id;
        await CitizenModel.remove({ _id: phone });
        resp.json({ message: "deleted" });
    });
}
module.exports = phoneAPIS;