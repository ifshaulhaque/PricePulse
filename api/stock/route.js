import express from "express";
import { controller } from "./controller.js";

const route = express.Router();

route.get("/stock", controller.search);
route.get("/stock/names", controller.getAllStockName);
route.get("/stock/names/:name", controller.getAutoComplete);

export default route