import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema(
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

export const Equipment=mongoose.model("equipment",equipmentSchema)