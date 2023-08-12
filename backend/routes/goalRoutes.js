import express from "express";
const router = express.Router();
import {
    getAllGoals,
    addNewGoal
} from "../controllers/goalController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get('/getgoals', protect, permit('Virtual Member', 'Physical Member'), getAllGoals);
router.post('/addgoal', protect, permit('Virtual Member', 'Physical Member'), addNewGoal);


export default router;
