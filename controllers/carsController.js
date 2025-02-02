const asyncHandler = require("express-async-handler");
const { CarModel } = require("../models/carModel");

const getAllCars = asyncHandler(async (req, res, next) => {
  const caars = await CarModel.find();

  res.status(200).json({ success: true, data: caars, total: caars.length });
});

const getCar = asyncHandler(async (req, res, next) => {
  const { id } = req.params;

  const car = await CarModel.findById(id);

  if (!car) {
    res.status(404);
    throw new Error("No car was found with the given id");
  }

  res.status(200).json({ success: true, data: car });
});

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

const updateCarData = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const payload = req.body;

  const carDetails = await CarModel.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  if (!carDetails) {
    res.status(404);
    throw new Error("Car data not found");
  }

  res.status(200).json({ success: true, updatedData: carDetails });
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

module.exports = {
  getCar,
  getAllCars,
  postCarData,
  postCarDataInBulk,
  updateCarData,
};
