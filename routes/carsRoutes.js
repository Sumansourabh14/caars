const express = require("express");
const {
  postCarData,
  postCarDataInBulk,
  getAllCars,
} = require("../controllers/carsController");
const router = express.Router();

router.get("/all", getAllCars);
router.post("/add", postCarData);
router.post("/add-bulk", postCarDataInBulk);

module.exports = router;
