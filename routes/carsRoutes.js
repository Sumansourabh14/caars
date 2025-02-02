const express = require("express");
const {
  postCarData,
  postCarDataInBulk,
  getAllCars,
  updateCarData,
  getCar,
} = require("../controllers/carsController");
const router = express.Router();

router.get("/single/:id", getCar);
router.get("/all", getAllCars);
router.post("/add", postCarData);
router.patch("/update/:id", updateCarData);
router.post("/add-bulk", postCarDataInBulk);

module.exports = router;
