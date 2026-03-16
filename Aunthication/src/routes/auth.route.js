import express from "express";
import { registerUser } from "../Controller/auth.controller.js";


const routes = express.Router();

routes.post("/register", registerUser);


export default routes;
