import express from "express";
import {
  initiateSignup,
  verifySignupOtp,
  login
} from "../controllers/auth.controller.js";
import { apiLimiter } from "../middlewares/rateLimiter.middleware.js";

const router = express.Router();

router.post("/signup/initiate", apiLimiter ,initiateSignup);

router.post("/signup/verify", verifySignupOtp);
router.post("/login", login);

export default router;