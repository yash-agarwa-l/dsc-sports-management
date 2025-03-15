import { Router } from "express";
import {  
    googleSignInUser,
    logoutUser,
    refreshAccessToken
    }
    from "../controllers/user.controller.js";

const router=Router();

router.route("/auth/login").post(googleSignInUser)
router.route("/logout").post(logoutUser)

export default router