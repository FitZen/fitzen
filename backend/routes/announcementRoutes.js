import express from "express";
const router = express.Router();
import {
    getAllAnnouncements,
    addNewAnnouncement,
} from "../controllers/announcementController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/getannouncements", getAllAnnouncements);
router.post("/addannouncement", addNewAnnouncement);



export default router;