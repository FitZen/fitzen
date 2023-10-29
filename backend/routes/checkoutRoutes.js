import express from "express";
const router = express.Router();
import {
    testPaymentController,
    checkoutShakebarOrder,
} from "../controllers/checkoutController.js";
// import { protect, permit } from "../middleware/authMiddleware.js";


router.post("/test", testPaymentController);
router.post("/shakebar-order", checkoutShakebarOrder);



export default router;
