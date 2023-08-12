import express from "express";
const router = express.Router();
import {
    getAllReceptionists
} from "../controllers/receptionistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/getreceptionists",protect, permit('Admin'), getAllReceptionists);


export default router;