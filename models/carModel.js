const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    brand: {
      type: String,
      required: true,
    },
    model: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
    },
    year: {
      type: Number,
    },
    img: {
      url: {
        type: String,
      },
      alt: {
        type: String,
        default: "",
        trim: true,
      },
    },
    engine: {
      engine_type: {
        type: String,
      },
      capacity: {
        value: { type: Number, required: true },
        unit: { type: String, default: "cc" },
      },
      power: {
        value: { type: Number, required: true },
        unit: { type: String, default: "hp" },
      },
      torque: {
        value: { type: Number, required: true },
        unit: { type: String, default: "Nm" },
      },
    },
    transmission: {
      type: String,
      required: true,
      enum: [
        "Manual",
        "Automatic",
        "AMT",
        "CVT",
        "iVT",
        "DCT",
        "DCA",
        "iMT",
        "eCVT",
        "Single Speed",
      ],
    },
    fuel_type: {
      type: String,
      enum: ["Petrol", "Diesel", "CNG", "Electric", "Hybrid"],
      required: true,
    },
    dimensions: {
      length: {
        type: Number,
        required: true,
      },
      width: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      wheelbase: {
        type: Number,
        required: true,
      },
    },
    seating_capacity: {
      type: Number,
      required: true,
    },
    boot_space: {
      type: Number,
      required: true,
    },
    price: {
      ex_showroom: {
        type: Number,
        required: true,
      },
      city: {
        type: String,
        default: "Bengaluru",
      },
    },
    safety: {
      globalncap: {
        adult: {
          type: Number,
        },
        child: {
          type: Number,
        },
      },
      bharatncap: {
        adult: {
          type: Number,
        },
        child: {
          type: Number,
        },
      },
    },
  },
  { timestamps: true }
);

const CarModel = mongoose.model("car", carSchema);

module.exports = { CarModel };
