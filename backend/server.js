const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const bodyParser = require("body-parser");
dotenv.config();
const connectDB = require("./config/db").connectDB;
connectDB();
const app = express();
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server is running in ${process.env.NODE_ENV} on port ${PORT}`.yellow.bold
  )
);
