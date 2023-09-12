import express from "express";
const router = express.Router();
import {
    getAllShakebarManagers,
    addNewShakebarManager,
} from "../controllers/shakebarManagerController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/getshakebarmanagers", protect, permit('Admin'), getAllShakebarManagers);
router.get("/getshakebarmanagers", getAllShakebarManagers);
// router.post("/addshakebarmanager", protect, permit('Admin'), addNewShakebarManager);
router.post("/addshakebarmanager", protect, permit('Admin'), addNewShakebarManager);


export default router;