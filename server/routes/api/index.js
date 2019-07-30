const router = require('express').Router();
const userRoutes = require('./users');
const imginfoRoutes = require('./imginfo');
const patientRoutes = require("./patient");

// API routes
router.use('/users', userRoutes);
router.use('/imginfo', imginfoRoutes);
router.use("/patient", patientRoutes);


module.exports = router;
