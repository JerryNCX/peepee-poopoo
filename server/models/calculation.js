import mongoose from "mongoose";

const calculationSchema = new mongoose.Schema(
  {
    process: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    mileage: {
      type: Number,
      required: true,
    },
    fees: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Calculation = mongoose.model("Calculation", calculationSchema);
export default Calculation;
