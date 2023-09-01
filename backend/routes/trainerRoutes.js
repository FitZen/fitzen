import express from "express";
const router = express.Router();
import {
    getViewAllTrainers,
    
} from "../controllers/trainerController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/viewtrainers",protect, permit('Admin'), getViewAllTrainers);
router.get("/viewtrainers", getViewAllTrainers);


export default router;