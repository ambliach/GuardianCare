var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var patientData = new Schema({
    name: String,
    mental: Number,
    respiration: Number,
    gastro: Number,
    urinary: Number,
    muscular: Number,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    updated_at: {type: Date, default: Date.now},
    professionalId: {type: Schema.Types.ObjectId, ref: "Professional"}

});

// userSchema.pre("save", function(next){
//     var currentDate = new Date();
// this.Updated_at = currentDate;
// next();
// });


var Patient = mongoose.model("Patient", patientData);




module.exports = Patient;

