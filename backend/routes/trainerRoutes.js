import express from "express";
const router = express.Router();
import {
    getViewAllTrainers,
    addNewTrainer,
} from "../controllers/trainerController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/viewtrainers", getViewAllTrainers);
// router.get("/viewtrainers", protect, getViewAllTrainers);
router.post("/addtrainer", protect, permit('Admin'), addNewTrainer);


export default router;