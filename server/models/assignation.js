import mongoose from "mongoose";

const assignationSchema = mongoose.Schema(
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

const assignationModel = mongoose.model("Assignation", assignationSchema);
export default assignationModel;
