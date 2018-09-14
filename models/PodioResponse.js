var mongoose = require("mongoose");

var PodioResponseSchema = new mongoose.Schema({
    JSON: String,
    app: String
},
{
    timestamps: true
});

module.exports = mongoose.model("PodioResponse", PodioResponseSchema);