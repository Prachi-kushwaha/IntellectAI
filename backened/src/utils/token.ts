import jwt from "jsonwebtoken";
import { createHmac } from "node:crypto";

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "7d", // token expiry
  });
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, JWT_SECRET);
};

export const hashToken = (token: string) => {
  return createHmac("sha256", JWT_SECRET).update(token).digest("hex");
};