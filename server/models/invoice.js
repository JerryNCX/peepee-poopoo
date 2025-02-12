import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema(
  {
    invoiceID: {
      type: String,
      required: true,
    },
    invoiceStatus: {
      type: Boolean,
      default: true,
    },
    invoiceFile: {
      type: String,
      required: true,
    },
    invoiceAmount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const invoiceModel = mongoose.model("Invoice", invoiceSchema);
export default invoiceModel;