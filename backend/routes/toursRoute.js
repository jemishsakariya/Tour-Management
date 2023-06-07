const express = require("express");
const router = express.Router();

const {
  createTour,
  updateTour,
  deleteTour,
  getSingelTour,
  getAllTour,
  getTourBySearch,
  getFeaturedTours,
  getTourCount,
} = require("../controllers/tourController");

router.post("/", createTour); // create new tour
router.put("/:id", updateTour); //update tour
router.delete("/:id", deleteTour); // delete tour
router.get("/:id", getSingelTour); //get single tour
router.get("/", getAllTour); //get all tour
router.get("/search/getTourBySearch", getTourBySearch); //get tour by search
router.get("/search/getFeaturedTours", getFeaturedTours); //get tour by search
router.get("/search/getToueCount", getTourCount); //get tour by search

module.exports = router;
