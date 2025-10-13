import express, { Request, Response } from "express";
import DbConnect from "./config/db";

import userRoutes from "./Routes/routeUser";
import dotenv from "dotenv";
import cors from "cors";
import path from 'path'
DbConnect();

dotenv.config();
const app = express();



const PORT = process.env.PORT || 3001;
app.use(
  cors({
 
    origin:"*", 
  })
);

app.use(express.static(path.join(__dirname, "build")));


app.use(express.json());

app.use("/auth", userRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
