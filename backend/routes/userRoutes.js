import express from "express";
const router = express.Router();
import {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
} from "../controllers/userController.js";
import protect from "../middleware/authMiddleware.js";

// '/api/users' is connected to this file
// therefore no need to add '/api/users' in the routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);

export default router;
