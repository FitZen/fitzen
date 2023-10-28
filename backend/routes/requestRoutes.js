import express from "express";
const router = express.Router();
import {
    getRequests
} from "../controllers/requestController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/trainer/:trainerId", getRequests);


export default router;