import jwt from "jsonwebtoken";

const Secret_KEy = process.env.JWT_SECRET || "mySecretKey";

export const generateToken = (email: string) => {
  return jwt.sign({ email }, Secret_KEy, { expiresIn: "1h" });
};

export const verifyToken = (token: string) => {
  try {
    return jwt.verify(token, Secret_KEy);
  } catch (error) {
    return null;
  }
};
