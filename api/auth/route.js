import express from "express";
import {controller} from "./controller.js";

const route = express.Router();

route.post("/auth/new", controller.createUserWithEmailAndPassword)
route.post("/auth", controller.signInWithEmailAndPassword)

export default route