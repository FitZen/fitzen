import express from "express";
const router = express.Router();
import {
    getExistContracts,
    checkoutTrainerPackage,
} from "../controllers/trainerPackageController.js";


router.get('/exist-contracts/:memberId', getExistContracts);
router.post("/trainerPackageBuy", checkoutTrainerPackage);


export default router;