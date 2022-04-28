import mongoose from "mongoose";

const consultSchema = new mongoose.Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    email: { type: String },
    message: { type: String },
  },
  { timestamps: true }
);

const Consult = mongoose.model("Consult", consultSchema);

export default Consult;
