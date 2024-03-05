import express from "express";
import { controller } from "./controller.js";

const route = express.Router();

route.get("/stock", controller.search);

export default route