import express from "express";
const router = express.Router();
import { getAllMembershipPlans } from "../controllers/membershipPlansController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get("/getmembershipplans", protect, getAllMembershipPlans);

export default router;
