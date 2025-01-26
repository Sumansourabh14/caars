const asyncHandler = require("express-async-handler");
const { CarModel } = require("../models/carModel");

const postCarData = asyncHandler(async (req, res, next) => {
  const payload = req.body;

  if (!payload) {
    res.status(400);
    throw new Error("Payload is required");
  }

  if (!payload.brand || !payload.model) {
    res.status(400);
    throw new Error("Brand and Model are required");
  }

  const carDetails = await CarModel.create(payload);

  res.status(201).json({ success: true, data: carDetails });
});

const postCarDataInBulk = asyncHandler(async (req, res, next) => {
  const payload = req.body;

  if (!Array.isArray(payload) || payload.length === 0) {
    res.status(400);
    throw new Error("Payload must be a non-empty array");
  }

  const result = await CarModel.insertMany(payload, { ordered: false });

  res.status(201).json({
    success: true,
    message: `${result.length} cars added successfully`,
    data: result,
  });
});

module.exports = { postCarData, postCarDataInBulk };
