import express from "express";
const router = express.Router();
import {
    getAllAnnouncements,
} from "../controllers/announcementController.js";
import { protect } from "../middleware/authMiddleware.js";


router.get("/announcement",protect, getAllAnnouncements);

export default router;