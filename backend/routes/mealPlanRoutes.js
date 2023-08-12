import express from "express";
const router = express.Router();
import {
    getAllMealPlans,
} from "../controllers/mealPlanController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/getmealplans",protect, permit('Trainer'), getAllMealPlans);


export default router;