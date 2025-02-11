import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    icOrPassport: {
      type: String,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    reasons: {
      type: String,
      default: "",
    },
    details: {
      type: String,
      default: function () {
        return `Name: ${this.name}, Phone: ${this.phoneNumber}, IC/Passport: ${this.icOrPassport}`;
      },
    },
    paymentProof: {
      type: String,
      default: "-",
    },
    bookingID: {
      type: String,
      default: "-",
    },
    verification: {
      type: String,
      default: function () {
        return this.availability ? "Verified" : "Pending";
      },
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);
export default User;
