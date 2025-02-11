import mongoose from "mongoose";

const DriverSchema = new mongoose.Schema(
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
      default: false, 
    },
  },
  { timestamps: true }
);

const Driver = mongoose.model("Driver", DriverSchema);
export default Driver;
