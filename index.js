const express = require("express");
const app = express();
const dotenv = require("dotenv");
const errorMiddleware = require("./middlewares/errorMiddleware");
const carsRoutes = require("./routes/carsRoutes");
const connectDb = require("./utils/connectDb");
const bodyParser = require("body-parser");

dotenv.config();
connectDb();

app.use(bodyParser.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

const PORT = process.env.PORT || 1006;

app.use("/api/v1/cars", carsRoutes);
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`listening to port:${PORT}`);
});
