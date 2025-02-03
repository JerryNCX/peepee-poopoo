// mongodb+srv://ncx030715:KNSfByDZLutSR2l5@softwareengfundementals.3rnna.mongodb.net/?retryWrites=true&w=majority&appName=SoftwareEngFundementals
// IPv4: 8.8.8.8 / DNS on Https (On)
import mongoose from "mongoose";
import express from "express";
import { connectDB } from "./db.js";
import adminModel from "./models/admin.js";
import bookingConfirmationModel from "./models/bookingConfirmation.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
connectDB();

app.get("/admin", async (req, res) => {
  const response = await adminModel.find();
  return res.json({ admin: response });
});

app.post("/api/admin", async (req, res) => {
  const response = await adminModel.find();
  return res.json({ admin: response });
});

app.get("/bookingConfirmation", async (req, res) => {
    const response = await bookingConfirmationModel.find();
    return res.json({ bookingConfirmation: response });
});

app.post("/api/bookingConfirmation", async (req, res) => {
    const response = await bookingConfirmationModel.find();
    return res.json({ bookingConfirmation: response });
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
