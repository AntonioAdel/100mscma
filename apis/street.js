var mongoose = require("mongoose");
var streetModel = require("../models/street.model");
var areaModel = require("../models/area.model");

function streetAPIS(app) {
    // get street 
    app.get("/getstreet", async(req, resp) => {
        var street = await streetModel.find({}); // async
        resp.json(street);
    });
    // api insert street

    app.post("/insertstreet", async(req, resp) => {
        const { name, cityarea } = req.body
        let street = new streetModel({
            _id: mongoose.Types.ObjectId(),
            name,
            area
        })
        await street.save()
        resp.json({ message: 'success' })
    })

}
module.exports = streetAPIS;