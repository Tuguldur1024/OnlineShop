import express from "express";
import { generateAndSendOtp, verifyOtp } from "../controller/otp";

const otpRouter = express.Router();

otpRouter
  .post("/GenerateAndSendOtp", generateAndSendOtp)
  .post("/VerifyOtp", verifyOtp);

export default otpRouter;
