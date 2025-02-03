import mongoose from "mongoose";

const assignationSchema = mongoose.Schema(
  {
    assignationDriver: {
      type: String,
    },
    assignationDriverDetails: {
      type: String,
      require: true,
    },
    assignationStatus: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const assignationModel = mongoose.model("Assignation", assignationSchema);
export default assignationModel;
