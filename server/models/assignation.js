import mongoose from "mongoose";

const assignationSchema = new mongoose.Schema(
  {
    assignationTow: {
      type: String,
      require: true,
    },
    assignationTowDetails: {
      type: String,
      require: true,
    },
    assignationStatus: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const assignationModel = mongoose.model("assignation", assignationSchema);
export default assignationModel;
