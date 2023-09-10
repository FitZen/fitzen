import express from "express";
const router = express.Router();
import {
    getViewAllTrainers,
    addNewTrainer,
} from "../controllers/trainerController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/viewtrainers",protect, permit('Admin'), getViewAllTrainers);
router.get("/viewtrainers", getViewAllTrainers);
// router.get("/viewtrainers", protect, getViewAllTrainers);
router.post("/addtrainer", protect, addNewTrainer);


export default router;