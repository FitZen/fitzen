import express from "express";
const router = express.Router();
import {
    getAllMealPlans,
    addNewMealPlan,
} from "../controllers/mealPlanController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/getmealplans", getAllMealPlans);
router.post("/addmealplan",protect, permit('Trainer'), addNewMealPlan);


export default router;