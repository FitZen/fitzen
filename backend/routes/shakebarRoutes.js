import express from "express";
const router = express.Router();
import {
    getAllShakeBarItems,
    addNewShakeBarItem,
} from "../controllers/shakebarItemController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/getshakebaritems", getAllShakeBarItems);
router.post("/addshakebaritem", addNewShakeBarItem);


export default router;