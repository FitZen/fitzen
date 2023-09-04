import express from "express";
const router = express.Router();
import {
    getAllMembershipPlans,
    addNewMembershipPlan,
} from "../controllers/membershipPlansController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/getmembershipplans", protect, permit('Admin', 'Receptionist', 'Virtual Member', 'Physical Member') , getAllMembershipPlans);
router.post("/addmembershipplan", protect, permit('Admin'), addNewMembershipPlan);

export default router;
