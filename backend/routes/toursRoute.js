const express = require("express");
const router = express.Router();

const { createTour } = require("../controllers/tourColtroller");

// create new tour
router.post("/", createTour);

module.exports = router;
