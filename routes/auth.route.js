import express from "express";
import {
  initiateSignup,
  verifySignupOtp,
  login
} from "../controllers/auth.controller.js";
import upload from "../middlewares/uploads.middleware.js";

const router = express.Router();

/**
 * SIGNUP FLOW
 */

// Step 1: Initiate signup (generate OTP)
router.post("/signup/initiate", initiateSignup);

// Step 2: Verify OTP and create user
router.post(
  "/signup/verify",
  upload.fields([
    { name: "image", maxCount: 1 },
    { name: "pdf", maxCount: 1 }
  ]),
  verifySignupOtp
);
router.post("/login", login);

export default router;
