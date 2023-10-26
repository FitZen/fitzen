import express from "express";
const router = express.Router();
import {
    getInstructorRatings,
} from "../controllers/ratingsController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/instructor/:instructorId", protect, getInstructorRatings);
router.get("/instructor/:instructorId", getInstructorRatings);


export default router;