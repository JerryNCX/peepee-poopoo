const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://ncx030715:ncx030715@softwareengfundementals.3rnna.mongodb.net/ForAdmin?retryWrites=true&w=majority&appName=SoftwareEngFundementals"
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
