import express from "express";
const router = express.Router();
import {
    getAllGoals,
} from "../controllers/goalController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get('/getgoals', protect, permit('Virtual Member', 'Physical Member'), getAllGoals);


export default router;
