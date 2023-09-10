import express from "express";
const router = express.Router();
import {
    getViewAllPhysiotherapists,
    addNewPhysiotherapist,
} from "../controllers/physiotherapistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/viewtrainers",protect, permit('Admin'), getViewAllTrainers);
router.get("/viewphysiotherapists", getViewAllPhysiotherapists);
// router.get("/viewphysiotherapists", protect, getViewAllPhysiotherapists);
router.post("/addphysiotherapist", protect, permit('Admin'), addNewPhysiotherapist);


export default router;