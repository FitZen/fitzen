import express from "express";
const router = express.Router();
import {
    getExistContracts,
    getExistContractMembers,
    checkoutTrainerPackage
} from "../controllers/trainerPackageController.js";


router.get('/exist-contracts/:memberId', getExistContracts);
router.get('/exist-contract-members/:trainerId', getExistContractMembers);
router.post("/trainerPackageBuy", checkoutTrainerPackage);


export default router;