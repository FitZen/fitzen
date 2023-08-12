import express from "express";
const router = express.Router();
import {
    getAllViewMembers,
    getAllViewPhysicalMembers,
    getAllViewVirtualMembers
} from "../controllers/memberController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/member",protect, permit('Receptionist'), getAllViewMembers);
router.get("/member/physical",protect, permit('Receptionist'), getAllViewPhysicalMembers);
router.get("/member/virtual",protect, permit('Receptionist'), getAllViewVirtualMembers);

export default router;