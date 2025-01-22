import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Admin from "./models/admin.model.js";

dotenv.config();

const app = express();

app.use(express.json()); // allow us to accept JSON data in the req.body

app.post("/api/admin", async (req, res) => {
  const admin = req.body; //user will send this data

  if (!admin.username || !admin.password) {
    return res.status(400).json({ message: "Please provide all the fields" });
  }

  const newAdmin = new Admin(admin);

  try {
    await newAdmin.save();
    res
      .status(201)
      .json({
        success: true,
        data: newAdmin,
        message: "Admin created successfully",
      });
  } catch (error) {
    console.error("Error in creating admin: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

console.log("Mongo_URI: ",process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
