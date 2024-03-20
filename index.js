import express from "express";
import cors from 'cors';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger.js";
import authRoute from "./api/auth/route.js";
import userRoute from "./api/user/route.js";
import stockRoute from "./api/stock/route.js";
import watchlistRoute from "./api/watchlist/route.js";
import dotenv from "dotenv";
import "./db/connection.js"
import "./db/firebase.js"
import helper from "./utils/download_stock_logo.js";
helper.imageSaveLocally();

dotenv.config();
const app = express();

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.json());
app.use(authRoute);
app.use(userRoute);
app.use(stockRoute);
app.use(watchlistRoute);

app.listen(process.env.PORT || 3000);