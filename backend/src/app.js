const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

// connect to mongodb
mongoose.connect(
  MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("Connected to mongodb");
    app.get("/", (_, res) => {
      res.send("Express app is running");
    });

    app.listen(PORT, () => {
      console.log(`Express app is running on http://localhost:${PORT}`);
    });
  }
);
