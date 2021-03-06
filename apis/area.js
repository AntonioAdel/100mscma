var mongoose = require("mongoose");
var areaModel = require("../models/area.model");
var cityModel = require("../models/city.model");

function areaAPIS(app) {
    // get area
    app.get("/getarea", async(req, resp) => {
        var area = await AreaModel.find({}); // async
        resp.json(area);
    });
    // insert area 
    app.post("/insertarea", async(req, resp) => {
        const { name, city } = req.body
        let area = new AreaModel({
            _id: mongoose.Types.ObjectId(),
            name,
            city
        })
        await area.save()
        resp.json({ message: 'success' });
    })

    app.post("/getareasofcity", async(req, resp) => {
        let { city } = req.body;
        let area = await AreaModel.find({city}); // async
        resp.json(area);
    })


}
module.exports = areaAPIS;