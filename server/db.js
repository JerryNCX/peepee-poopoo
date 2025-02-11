import mongoose from "mongoose";
// const mongoose = require("mongoose");

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ncx030715:HoCd0Ryj4UQSjfl0@softwareengfundementals.3rnna.mongodb.net/ForAdmin?retryWrites=true&w=majority&appName=SoftwareEngFundementals"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};