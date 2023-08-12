import express from "express";
const router = express.Router();
import {
    getAllAnnouncements,
    addNewAnnouncement,
} from "../controllers/announcementController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/getannouncements",protect, getAllAnnouncements);
router.post("/addannouncement",protect, permit('Admin'), addNewAnnouncement);


export default router;