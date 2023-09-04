import express from "express";
const router = express.Router();
import { getAllMembershipPlans } from "../controllers/membershipPlansController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/getmembershipplans", protect, permit('Admin', 'Receptionist', 'Virtual Member', 'Physical Member') , getAllMembershipPlans);

export default router;
