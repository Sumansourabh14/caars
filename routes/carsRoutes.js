const express = require("express");
const { postCarData } = require("../controllers/carsController");
const router = express.Router();

router.post("/add", postCarData);

module.exports = router;
