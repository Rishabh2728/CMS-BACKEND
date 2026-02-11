import mongoose from "mongoose";

const likeSchema = new mongoose.Schema(
    {
        artifact: {
            type: mongoose.Schema.Types.ObjectId,
            rof: "Artifact",
            required: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        }
    },
    {timestamps: true}
);