var mongoose = require("mongoose")
var CityModel = require("../../models/Address/city.model")
var AreaModel = require("../../models/Address/area.model")

function addressAPIS(app) {

    // api insert city

    app.post("/insertcity", async (req, resp) => {
        const { name, phase } = req.body
        let city = new CityModel({
            _id: mongoose.Types.ObjectId(),
            name, phase
        })
        await city.save()
        resp.json({ message: 'success' })
    })


    // api insert area

    app.post("/insertarea", async (req, resp) => {
        const { name, city } = req.body
        let area = new AreaModel({
            _id: mongoose.Types.ObjectId(),
            name, city
        })
        await area.save()
        resp.json({ message: 'success' })
    })

}

module.exports = addressAPIS