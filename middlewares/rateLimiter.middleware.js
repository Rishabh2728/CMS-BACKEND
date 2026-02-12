import rateLimit from "express-rate-limit";

export const apiLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 2,
    message: {
        success: false,
        message: "false",
        message: "Too many requests, please try again later"
    },
    standardHeader: true,
    legacyHeaders: false
});