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
      default: null,
    },
    img: {
      url: {
        type: String,
      },
      alt: {
        type: String,
        default: "",
      },
    },
    engine: {
      engine_type: {
        type: String,
        required: true,
      },
      capacity: {
        type: String,
        required: true,
      },
      power: {
        type: String,
        required: true,
      },
      torque: {
        type: String,
        required: true,
      },
    },
    transmission: {
      type: String,
      required: true,
    },
    dimensions: {
      length: {
        type: String,
        required: true,
      },
      width: {
        type: String,
        required: true,
      },
      height: {
        type: String,
        required: true,
      },
      wheelbase: {
        type: String,
        required: true,
      },
    },
    seating_capacity: {
      type: Number,
      required: true,
    },
    boot_space: {
      type: String,
      required: true,
    },
    price: {
      ex_showroom: {
        type: String,
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
          default: null,
        },
        child: {
          type: Number,
          default: null,
        },
      },
      bharatncap: {
        adult: {
          type: Number,
          default: null,
        },
        child: {
          type: Number,
          default: null,
        },
      },
    },
  },
  { timestamps: true }
);

const CarModel = mongoose.model("car", carSchema);

module.exports = { CarModel };
