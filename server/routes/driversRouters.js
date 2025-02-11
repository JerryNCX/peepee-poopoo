import express from "express";
import Driver from "../models/drivers.js";

const router = express.Router();

// Get all drivers
router.get("/", async (req, res) => {
  try {
    const drivers = await Driver.find();
    res.json(drivers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching drivers", error });
  }
});

// Add a new driver
router.post("/", async (req, res) => {
  const { name, phoneNumber, icOrPassport, availability } = req.body;

  try {
    const newDriver = new Driver({
      name,
      phoneNumber,
      icOrPassport,
      availability,
    });

    await newDriver.save();
    res.status(201).json(newDriver);
  } catch (error) {
    res.status(400).json({ message: "Error adding driver", error });
  }
});

// Delete a driver by ID
router.delete("/:id", async (req, res) => {
  try {
    const driver = await Driver.findByIdAndDelete(req.params.id);
    if (!driver) {
      return res.status(404).json({ message: "Driver not found" });
    }
    res.json({ message: "Driver deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting driver", error });
  }
});

export default router;
