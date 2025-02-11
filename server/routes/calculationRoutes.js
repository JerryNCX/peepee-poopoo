import express from "express";
import Calculation from "../models/calculation.js";

const router = express.Router();

// GET all calculations
router.get("/", async (req, res) => {
  try {
    const calculations = await Calculation.find();
    res.json(calculations);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch calculations" });
  }
});

// POST a new calculation
router.post("/", async (req, res) => {
  try {
    const { process, from, to, mileage, fees } = req.body;
    const newCalculation = new Calculation({ process, from, to, mileage, fees });
    
    await newCalculation.save();
    res.status(201).json({ message: "Calculation saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save calculation" });
  }
});

// DELETE a calculation by ID
router.delete("/:id", async (req, res) => {
  try {
    await Calculation.findByIdAndDelete(req.params.id);
    res.json({ message: "Calculation deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete calculation" });
  }
});

export default router;
