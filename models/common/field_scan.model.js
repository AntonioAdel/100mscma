var mongoose = require(mongoose);
var FieldScanSchema = new mongoose.schema({
_id: mongoose.Schema.Types.ObjectId,
state:String,
value:,
city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "city"
}
})
var FieldScanModel = new mongoose.model("FieldScan", FieldScanSchema)

module.exports = FieldScanModel