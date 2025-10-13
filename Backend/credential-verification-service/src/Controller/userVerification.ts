import { credentialUser } from "../models/userModel";

import express, { Request, Response } from "express";
import { generateToken, verifyToken } from "../utills/helperjwt";
import { verifyPassword } from "../utills/hashPasswordHelper";

export const loginVerification = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const exsistingUser = await credentialUser.findOne({
      email: email,
    });
    if (!exsistingUser) {
      return res.status(400).json({ message: "Invalid-Email" });
    }

    const verifyPass = await verifyPassword(password, exsistingUser.password);

    if (!verifyPass) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = generateToken(email);
    console.log("Data checked returntrue",verifyPass);
    
    return res.status(200).json({
      message: "Login Successfull",
      token,
      user: { name: exsistingUser.name, email: exsistingUser.email },
    });
  } catch (error) {
    console.log(error);
  }
};
