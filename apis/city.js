var mongoose = require("mongoose");
var cityModel = require("../models/city.model");

function cityAPIS(app) {
    // get city
    app.get("/getcity", async(req, resp) => {
        var city = await cityModel.find({}); // async
        resp.json(city);
    });
    // api insert city

    app.post("/insertcity", async(req, resp) => {
        const { name, phase } = req.body;
        let city = new CityModel({
            _id: mongoose.Types.ObjectId(),
            name,
            phase
        })
        await city.save();
        resp.json({ message: 'success' });
    })


}
module.exports = cityAPIS;