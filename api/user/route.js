import express from "express";
import {controller} from "./controller.js";

const route = express.Router();

route.post("/user", controller.save)
route.put("/user", controller.update)

export default route