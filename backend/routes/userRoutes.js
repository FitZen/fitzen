import express from "express";
const router = express.Router();
import {
    loginUser,
    logoutUser,
    getUserProfile,
} from "../controllers/userController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// '/api/users' is connected to this file
// therefore no need to add '/api/users' in the routes
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.get("/profile", protect, getUserProfile);


export default router;
