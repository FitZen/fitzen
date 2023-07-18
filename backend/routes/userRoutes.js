import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from "../controllers/userController.js";

// '/api/users' is connected to this file
// therefore no need to add '/api/users' in the routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);
router.put("/profile", updateUserProfile);

export default router;
