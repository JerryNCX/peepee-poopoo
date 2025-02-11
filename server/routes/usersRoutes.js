import express from "express";
import User from "../models/users.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  const { name, phoneNumber, icOrPassport, availability, reasons } = req.body;

  try {
    const newUser = new User({
      name,
      phoneNumber,
      icOrPassport,
      availability,
      reasons,
    });

    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Error adding user", error });
  }
});

// Delete user by ID
router.delete("/:id", async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting user", error });
  }
});

export default router;
