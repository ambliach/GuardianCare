const db = require("../models");

module.exports = {

    createPatient: function(req, res) {
        let patientData = req.body
        db.Patient.create({
            name: patientData.name,
            mental: patientData.mental,
            respiration: patientData.respiration,
            gastro: patientData.gastro,
            urinary: patientData.urinary,
            muscular: patientData.muscular
        }).then(results => {
            res.json(results)
        })
    },

    getPatients: function(req, res) {
        let professionalId = req.params.id
        db.Patient.findAll({
            professionalId: professionalId
        }).then(results => {
            res.json(results)
        })
    },

    deletePatient: function(req, res) {
        let patientId = req.params.id
        db.Patient.deleteOne({
            _id: patientId
        }).then(results => {
            res.json(results)
        })
    },

    updatePatient: function(req, res) {
        let patientId = req.params.id
        let updatedInfo = req.body
        db.Patient.update({_id: patientId}, updatedInfo)
        .then(results => {
            res.json(results)
        })
    }
}

// //.get(patientsController.getPatients)
// .put(patientsController.updatePatient)
// .delete(patientsController.deletePatient);

//