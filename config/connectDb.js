/** @format */

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const connectDB = async DATABASE_URL => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("connection success");
  } catch (error) {
    console.log("error");
  }
};
export default connectDB;
