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
router.post("/complaint",protect, permit('Trainer','Physiotherapist','Physical Member','Virtual Member') ,addNewComplaint);


export default router;