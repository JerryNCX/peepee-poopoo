import mongoose from "mongoose";

const bookingConfirmationSchema = new mongoose.Schema({
  detail: {
    type: String,
    required: true,
  },
  Image: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  verification: {
    type: Boolean,
  },
  delete: {
    type: Boolean,
    default: false,
  },
});

const bookingConfirmationModel = mongoose.model(
  "bookingConfirmation",
  bookingConfirmationSchema
);
export default bookingConfirmationModel;
