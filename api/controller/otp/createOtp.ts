import OtpModel from "../../model/otp.model";
import nodemailer from "nodemailer";
import { Request, Response } from "express";

const generateOtp = () =>
  Math.floor(100000 + Math.random() * 900000).toString();

const sendOtpEmail = async (email: string, otp: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is: ${otp}. It expires in 5 minutes.`,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};

export const generateAndSendOtp = async (req: Request, res: Response) => {
  const { email } = req.body;
  console.log("irj baina");
  const otp = generateOtp();
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);
  try {
    await OtpModel.deleteMany({ email });
    await OtpModel.create({ email, otp, expiresAt });
    await sendOtpEmail(email, otp);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

export const verifyOtp = async (req: Request, res: Response) => {
  const { email, otp } = req.body;
  try {
    const storedOtp = await OtpModel.findOne({ email, otp });
    if (!storedOtp) res.status(400).json({ message: "Invalid OTP" });
    if (storedOtp !== null && storedOtp.expiresAt < new Date())
      res.status(400).json({ message: "OTP expired" });
    await OtpModel.deleteMany({ email });
    res.status(200).json({ message: "OTP verified successfully!" });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};
