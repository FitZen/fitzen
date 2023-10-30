import express from "express";
const router = express.Router();
import {
    getAllNotifications
} from "../controllers/notificationController.js";


router.get("/user/:receiverId", getAllNotifications);


export default router;