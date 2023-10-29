import express from "express";
const router = express.Router();
import {
    getAllShakebarManagers,
    addNewShakebarManager,
    getShakebarManagerCount,
    getActiveShakebarManagerCount,
    getShakebarManagerCountToday,
} from "../controllers/shakebarManagerController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/getshakebarmanagers", protect, permit('Admin'), getAllShakebarManagers);
router.get("/getshakebarmanagers", getAllShakebarManagers);
// router.post("/addshakebarmanager", protect, permit('Admin'), addNewShakebarManager);
router.post("/addshakebarmanager", addNewShakebarManager);


router.get("/count", protect, permit('Admin'), getShakebarManagerCount);

router.get("/count/active", getActiveShakebarManagerCount);

router.get("/count/today", getShakebarManagerCountToday);


export default router;