import mongoose from "mongoose";

const courtSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        }

    },
    {
        timestamps: true
    }
)

export const Court=mongoose.model("equipment",courtSchema)