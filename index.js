import express from "express";
import authRoute from "./api/auth/route.js";
import userRoute from "./api/user/route.js";
import dotenv from "dotenv";
import "./db/connection.js"
import "./db/firebase.js"

dotenv.config();
const app = express();

app.use(express.json());
app.use(authRoute);
app.use(userRoute);

app.listen(process.env.PORT || 3000);