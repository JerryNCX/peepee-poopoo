import express from "express";
import User from "../models/users.js";

const router = express.Router();

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    // Modify response to match frontend expectations
    const formattedUsers = users.map((user) => ({
      _id: user._id,
      details: `Name: ${user.name}, Phone: ${user.phoneNumber}, IC/Passport: ${user.icOrPassport}`,
      paymentProof: "-", // No such field in backend, placeholder added
      bookingID: "-", // No such field in backend, placeholder added
      verification: user.availability ? "Verified" : "Pending",
    }));

    res.json(formattedUsers);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error });
  }
});


// Add a new user
router.post("/", async (req, res) => {
  const { details, paymentProof, bookingID, verification } = req.body;

  try {
    const newUser = new User({
      details,
      paymentProof,
      bookingID,
      verification,
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
      const user = await User.findByIdAndDelete(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting user", error });
    }
  });
  

export default router;
