// mongodb+srv://ncx030715:KNSfByDZLutSR2l5@softwareengfundementals.3rnna.mongodb.net/?retryWrites=true&w=majority&appName=SoftwareEngFundementals
// IPv4: 8.8.8.8 / DNS on Https (On)
import mongoose from "mongoose";
import express from "express";
import { connectDB } from "./db.js";
import adminModel from "./models/admin.js";
import bookingConfirmationModel from "./models/bookingConfirmation.js";
import assignationModel from "./models/assignation.js";
import feedbackModel from "./models/feedback.js";
import invoiceModel from "./models/Invoice.js";
import scheduleModel from "./models/schedule.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

// app.get("/", async (req, res) => {
//   const response = await adminModel.find();
//   return res.json({ admin: response });
// });

app.post("/admin", async (req, res) => {
  const response = await adminModel.find();
  return res.json({ admin: response });
});

// app.get("/bookingConfirmation", async (req, res) => {
//     const response = await bookingConfirmationModel.find();
//     return res.json({ bookingConfirmation: response });
// });

app.post("/bookingConfirmation", async (req, res) => {
  const response = await bookingConfirmationModel.find();
  return res.json({ bookingConfirmation: response });
});

app.post("/assignation", async (req, res) => {
  const response = await assignationModel.find();
  return res.json({ assignation: response });
});

app.post("/feedback", async (req, res) => {
  const response = await feedbackModel.find();
  return res.json({ feedback: response });
});

app.post("/schedule", async (req, res) => {
  const response = await scheduleModel.find();
  return res.json({ schedule: response });
});

app.post("/invoice", async (req, res) => {
  const response = await invoiceModel.find();
  return res.json({ invoice: response });
});

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
