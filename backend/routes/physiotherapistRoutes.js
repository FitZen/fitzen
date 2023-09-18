import express from "express";
const router = express.Router();
import {
    getViewAllPhysiotherapists,
    addNewPhysiotherapist,
    getPhysiotherapistCount,
} from "../controllers/physiotherapistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/viewphysiotherapists", getViewAllPhysiotherapists);
// router.get("/viewphysiotherapists", protect, getViewAllPhysiotherapists);
// router.post("/addphysiotherapist", protect, permit('Admin'), addNewPhysiotherapist);
router.post("/addphysiotherapist", addNewPhysiotherapist);

// router.get("/count", protect, permit('Admin'), getPhysiotherapistCount);
router.get("/count", getPhysiotherapistCount);


export default router;