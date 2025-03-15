import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true, 
        },
        fullName: {
            type: String,
            required: true,
            trim: true, 
            index: true
        },
        refreshToken: {
            type: String
        },
        googleId:{
            type:"String",
            unique:true,
            required:true
        }

    },
    {
        timestamps: true
    }
)



export const User=mongoose.model("user",userSchema)