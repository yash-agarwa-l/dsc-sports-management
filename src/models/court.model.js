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
        },
        sport:{
            type: Schema.Types.ObjectId,
            ref: "Sport"
        }
    },
    {
        timestamps: true
    }
)
export const Court=mongoose.model("court",courtSchema)