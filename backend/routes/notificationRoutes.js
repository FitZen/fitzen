import express from "express";
const router = express.Router();
import {
    getAllNotifications,
    addNewNotification,
    updateNotificationAsRead,
} from "../controllers/notificationController.js";


router.get("/user/:receiverId", getAllNotifications);
router.post("/new", addNewNotification);
router.patch("/update", updateNotificationAsRead);


export default router;