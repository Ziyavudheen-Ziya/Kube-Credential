import express from "express";
import { Signup } from "../controller/userController";
const userRoutes = express();

userRoutes.post("/signup", Signup);

export default userRoutes;
