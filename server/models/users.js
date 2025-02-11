import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    details: {
      type: String,
      required: true,
    },
    paymentProof: {
      type: String, // Assuming it's a URL to an image/file
      required: true,
    },
    bookingID: {
      type: String,
      required: true,
      unique: true,
    },
    verification: {
      type: String,
      enum: ["Pending", "Verified", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
