import express from "express";
const router = express.Router();
import {
    getViewAllTrainers,
    addNewTrainer,
    getTrainerCount,
} from "../controllers/trainerController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/viewtrainers", getViewAllTrainers);
// router.get("/viewtrainers", protect, getViewAllTrainers);
// router.post("/addtrainer", protect, permit('Admin'), addNewTrainer);
router.post("/addtrainer", addNewTrainer);

// router.get("/count", protect, permit('Admin'), getTrainerCount);
router.get("/count", getTrainerCount);


export default router;