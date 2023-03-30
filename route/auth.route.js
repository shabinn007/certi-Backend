/** @format */

import express from "express";
import { Usersignup, userLogin } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", Usersignup);
router.post("/signin", userLogin);

export default router;
