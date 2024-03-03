import express from "express";
import {controller} from "./controller.js";

const route = express.Router();

route.post("/auth", controller.createUserWithEmailAndPassword)

export default route