import express from "express";
const router = express.Router();
import {
    getViewAllPhysiotherapists,
    
} from "../controllers/physiotherapistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/viewtrainers",protect, permit('Admin'), getViewAllTrainers);
router.get("/viewphysiotherapists", getViewAllPhysiotherapists);


export default router;