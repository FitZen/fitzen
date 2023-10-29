import express from "express";
const router = express.Router();
import {
    testPaymentController,
} from "../controllers/paymentController.js";
// import { protect, permit } from "../middleware/authMiddleware.js";


router.post("/test", testPaymentController);


export default router;
