import express from "express";
const router = express.Router();
import {
    getAllNotifications,
    addNewNotification,
} from "../controllers/notificationController.js";


router.get("/user/:receiverId", getAllNotifications);
router.post("/new", addNewNotification);


export default router;