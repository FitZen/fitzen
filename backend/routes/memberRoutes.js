import express from "express";
const router = express.Router();
import {
    getAllViewMembers,
    getAllViewPhysicalMembers,
    getAllViewVirtualMembers,
    addPhysicalMember,
    getPhysicalMemberCount,
    getVirtualMemberCount,
} from "../controllers/memberController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/member",protect, permit('Receptionist'), getAllViewMembers);
// router.get("/member/physical",protect, permit('Receptionist'), getAllViewPhysicalMembers);
router.get("/member/physical", getAllViewPhysicalMembers);
// router.get("/member/virtual",protect, permit('Receptionist'), getAllViewVirtualMembers);
router.get("/member/virtual", getAllViewVirtualMembers);
router.post("/member/physical/add",protect, permit('Receptionist'), addPhysicalMember);

router.get("/physical/count",protect, permit('Admin'), getPhysicalMemberCount);
router.get("/virtual/count",protect, permit('Admin'), getVirtualMemberCount);

export default router;