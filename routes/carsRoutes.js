const express = require("express");
const {
  postCarData,
  postCarDataInBulk,
} = require("../controllers/carsController");
const router = express.Router();

router.post("/add", postCarData);
router.post("/add-bulk", postCarDataInBulk);

module.exports = router;
