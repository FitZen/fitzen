import express from "express";
const router = express.Router();
import {
    getAllShakebarItems,
    addNewShakebarItem,
} from "../controllers/shakebarItemController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/items", getAllShakebarItems);
router.post("/item", addNewShakebarItem);


export default router;