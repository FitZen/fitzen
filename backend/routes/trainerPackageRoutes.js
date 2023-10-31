import express from "express";
const router = express.Router();
import {
    checkoutTrainerPackage,
} from "../controllers/trainerPackageController.js";
// import { protect, permit } from "../middleware/authMiddleware.js";


router.post("/trainerPackageBuy", checkoutTrainerPackage);



export default router;