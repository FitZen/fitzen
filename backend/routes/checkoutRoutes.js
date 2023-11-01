import express from "express";
const router = express.Router();
import {
    checkoutShakebarOrder,
} from "../controllers/checkoutController.js";


router.post("/shakebar-order", checkoutShakebarOrder);


export default router;
