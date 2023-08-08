import express from "express";
const router = express.Router();
import {
    getAllComplaints,
    getAllHandledComplaints,
    addNewComplaint
} from "../controllers/complaintController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/complaint",protect, permit('Admin'), getAllComplaints);
router.get("/complaint/handled",protect, permit('Admin'), getAllHandledComplaints);
router.post("/complaint",protect, permit('Shake Bar Manager','Trainer','Physiotherapist','Physical Member','Receptionist','Virtual Member') ,addNewComplaint); //permit() all users or except admin


export default router;