import express from "express";
const router = express.Router();
import {
    getRequests,
    addNewRequest,
    updatePendingRequestStatus,
} from "../controllers/requestController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/trainer/:trainerId", getRequests);
router.post("/member", addNewRequest);
router.patch("/trainer", updatePendingRequestStatus);


export default router;