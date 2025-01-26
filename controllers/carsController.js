const asyncHandler = require("express-async-handler");
const { CarModel } = require("../models/carModel");

const postCarData = asyncHandler(async (req, res, next) => {
  const payload = req.body;

  if (!payload) {
    res.status(400);
    throw new Error("Payload is required");
  }

  const carDetails = await CarModel.create(payload);

  res.status(201).json({ success: true, data: carDetails });
});

module.exports = { postCarData };
