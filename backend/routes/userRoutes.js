import express from "express";
const router = express.Router();
import {
    loginUser,
    logoutUser,
    getUserAllDetails,
    getTotalUserCount,
    getActiveUserCount,
} from "../controllers/userController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// '/api/users' is connected to this file
// therefore no need to add '/api/users' in the routes
router.post("/login", loginUser);
router.post("/logout", protect, logoutUser);
router.get("/details", protect, getUserAllDetails);
// router.post("/logout", logoutUser);
// router.get("/details", getUserAllDetails);
router.get("/totalusercount", protect, permit('Admin'), getTotalUserCount);
router.get("/activeusercount", protect, permit('Admin'), getActiveUserCount);

export default router;
