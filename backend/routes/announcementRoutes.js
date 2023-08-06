import express from "express";
const router = express.Router();
import {
    getAllAnnouncements,
    addNewAnnouncement,
} from "../controllers/announcementController.js";
import { protect } from "../middleware/authMiddleware.js";


router.get("/announcement",protect, getAllAnnouncements);
router.post("/announcement",protect, addNewAnnouncement);

export default router;