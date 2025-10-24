const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("../middlewares/errorMiddleware");
const carsRoutes = require("../routes/carsRoutes");
const connectDb = require("../utils/connectDb");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();
connectDb();

app.use(cors({ origin: "*" }));

app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 1006;

app.get("/", (req, res) => {
  res.json({ success: true, message: "Caars API is running..." });
});

app.use("/api/v1/cars", carsRoutes);
app.use(errorMiddleware);

module.export = app;
