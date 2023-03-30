/** @format */

import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SEC_KEY = process.env.JWT_SC_KEY;
import CertUser from "../model/auth.model.js";

export const createUser = async ({ username, password }) => {
  if (!password || !username) {
    throw new Error("add all fields");
  }

  try {
    const savedUser = await CertUser.findOne({ username: username });
    console.log("saveduser", savedUser);
    if (savedUser) {
      throw new Error("Already exists");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);

    const User = new CertUser({
      username: username,
      password: encryptedPassword,
    });

    await User.save();
    return { message: "saved successfully" };
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const loginUser = async ({ username, password }) => {
  if (!username || !password) {
    throw new Error("add all fields");
  }

  try {
    const savedUser = await CertUser.findOne({ username: username });
    if (!savedUser) {
      throw new Error("invalid email or password");
    }
    const doMatch = await bcrypt.compare(password, savedUser.password);
    if (doMatch) {
      const token = jwt.sign({ Userid: savedUser._id }, JWT_SEC_KEY);
      return { token: token, message: "Logged in", status: "success" };
    } else {
      throw new Error("invalid email or password");
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
