import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const sportSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        equipments:[
            {
                type: Schema.Types.ObjectId,
                ref: "Equipment"
            }
        ],
        court:{
            type: Schema.Types.ObjectId,
            ref: "Court"
        }
    },
    {
        timestamps: true
    }
)

export const Sport=mongoose.model("sport",sportSchema)

