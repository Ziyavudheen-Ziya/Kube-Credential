import express, { Request, Response } from "express";
import { credentialUser } from "../models/userModel";
import jwt from "jsonwebtoken";

import {generateToken} from '../utills/helperjwt'
import { hashPassword } from "../utills/hashPasswordHelper";
export const Signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }
    console.log(name);

    const idNumber = Math.floor(1000 + Math.random() * 9000);
    console.log(idNumber);
    const workerId = process.env.Worker_id;
    const checkEmailExssit = await credentialUser.findOne({ email });

    if (checkEmailExssit) {
      console.log("Data checked correctly");
      return res.status(400).json({ message: "User Already Exists" });
    }

    const hashPass = await hashPassword(password)
    console.log(hashPass);
    

    const user = await credentialUser.create({
      id: idNumber,
      name: name,
      email: email,
      password: hashPass,
      isssuedBy: workerId,
    });

  const token = generateToken(email)

    res.status(201).json({
      message: "User Signed Successfully",
      user: { id: user.id, name: user.name, email: user.email },
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
