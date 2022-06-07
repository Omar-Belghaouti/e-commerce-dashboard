import { authRouter, paymentsRouter } from "./routes/index.js";
import express, { json } from "express";

import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";

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
    app.use(json());
    app.get("/", (_, res) => {
      res.send("Express app is running");
    });
    app.use("/auth", authRouter);
    app.use("/payments", paymentsRouter);

    app.listen(PORT, () => {
      console.log(`Express app is running on http://localhost:${PORT}`);
    });
  }
);
