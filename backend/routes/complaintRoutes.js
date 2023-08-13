import express from "express";
const router = express.Router();
import {
    getAllHandledComplaints,
    getAllUnhandledComplaints,
    addNewComplaint,
} from "../controllers/complaintController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/handledcomplaints",protect, permit('Admin'), getAllHandledComplaints);
router.get("/unhandledcomplaints",protect, permit('Admin'), getAllUnhandledComplaints);
router.post("/addcomplaint",protect, permit('Trainer','Physiotherapist','Physical Member','Virtual Member') ,addNewComplaint);


export default router;