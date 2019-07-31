const router = require("express").Router();

const patientsController = require("../../controllers/patientsController");

router.route("/")
    .post(patientsController.createPatient);

router.route("/:id")
    .get(patientsController.getPatients)
    .put(patientsController.updatePatient)
    .delete(patientsController.deletePatient);

module.exports = router