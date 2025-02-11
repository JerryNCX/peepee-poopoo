// mongodb+srv://ncx030715:KNSfByDZLutSR2l5@softwareengfundementals.3rnna.mongodb.net/?retryWrites=true&w=majority&appName=SoftwareEngFundementals
// IPv4: 8.8.8.8 / DNS on Https (On)
import mongoose from "mongoose";
import express from "express";
import { connectDB } from "./db.js";
import adminModel from "./models/admin.js";
import bookingConfirmationModel from "./models/bookingConfirmation.js";
import Form from "./models/Form.js";
import assignationModel from "./models/assignation.js";
import feedbackModel from "./models/feedback.js";
import invoiceModel from "./models/Invoice.js";
import scheduleModel from "./models/schedule.js";
import cors from "cors";
import multer from "multer";

const upload = multer({ dest: "uploads/" });
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/admin", async (req, res) => {
  try {
    const response = await adminModel.find();
    res.json({ admin: response });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch admin data" });
  }
});

app.get("/booking", async (req, res) => {
  try {
    const response = await bookingConfirmationModel.find();
    res.json({ bookingConfirmation: response });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.post("/submit-form", async (req, res) => {
  try {
    const newFormEntry = new FormModel({
      name: req.body.name,
      contact: req.body.contact,
      email: req.body.email,
      vehicleInfo: req.body.vehicleInfo,
      passportNumber: req.body.passportNumber,
      nationality: req.body.nationality, 
      requiresTowing: req.body.requiresTowing === "on", // Checkbox logic
      date: req.body.date,
      file: req.body.file, // Handle file uploads separately (e.g., using Multer)
    });

    await newFormEntry.save();
    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});
app.post("/submit-form", upload.single("file"), async (req, res) => {
  // Access the uploaded file via req.file
  const filePath = req.users;
  // Save filePath to MongoDB
});

app.get("/assignation", async (req, res) => {
  try {
    const response = await assignationModel.find();
    res.json({ assignation: response });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch assignation" });
  }
});

// app.post("/feedback", async (req, res) => {
//   const response = await feedbackModel.find();
//   return res.json({ feedback: response });
// });

app.get("/schedule", async (req, res) => {
  try {
    const response = await scheduleModel.find();
    return res.json({ schedule: response });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch schedule" });
  }
});

// app.post("/invoice", async (req, res) => {
//   const response = await invoiceModel.find();
//   return res.json({ invoice: response });
// });

app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
