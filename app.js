/** @format */

import AuthRoutes from "./route/auth.route.js";
// import Placerouter from "./routes/PlacesRoutes.js";
// import TicketRoutes from "./routes/TicketRoutes.js";
import "dotenv/config";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import connectDB from "./config/connectDb.js";
import { errorHandling } from "./middleware/error.middleware.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(bodyParser.json());

app.use(cors({ origin: true, credentials: true }));

app.use(AuthRoutes);

app.use(errorHandling);
// DB Connection
const DATABASE_URL = process.env.DATABASE_URL;
connectDB(DATABASE_URL);

//JSON

app.listen(port, () => {
  console.log("server is running on:", port);
});
