import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  contact: { type: String, required: true },
  email: { type: String, required: true },
  vehicleInfo: { type: String, required: true },
  passportNumber: { type: String, required: true },
  nationality: { type: String, default: false }, // Assuming this is a checkbox
  requiresTowing: { type: String, default: false }, // Another checkbox
  date: { type: Date, required: true },
  file: { type: String }, // Store file path or reference
});

const Form = mongoose.model("Form", FormSchema);
export default Form;
