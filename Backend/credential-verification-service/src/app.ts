import express, { Request, Response } from "express";
import DbConnect from "./config/db";

import dotenv from "dotenv";
import cors from "cors";
import verificationRoute from "./Routes/verificationRoues";
import path from "path";
DbConnect();

dotenv.config();
const app = express();

const PORT = process.env.PORTVERIFICATION || 3002;
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static(path.join(__dirname, "build")));

app.use(express.json());

app.use("/verification", verificationRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
