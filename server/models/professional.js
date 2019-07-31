var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var professionalSchema = new Schema({
     professionalId: {type: Schema.Types.ObjectId, ref: "User"}
})

var Professional = mongoose.model("Professional", professionalSchema);

module.exports = Professional

