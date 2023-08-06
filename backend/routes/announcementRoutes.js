import express from "express";
const router = express.Router();
import {
    getAllAnnouncements,
    addNewAnnouncement,
} from "../controllers/announcementController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/announcement",protect, getAllAnnouncements);
router.post("/announcement",protect, permit('Admin'), addNewAnnouncement);


export default router;