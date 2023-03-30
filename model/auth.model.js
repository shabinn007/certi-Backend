/** @format */

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  email: {
    type: mongoose.Schema.Types.String,
    required: false,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
});
const CertUser = mongoose.model("user", userSchema);

export default CertUser;
