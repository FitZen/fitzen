import express from "express";
const router = express.Router();
import {
    getAllTaskDates,
    addMemberSchedule
} from "../controllers/scheduleController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get('/gettasksdates', getAllTaskDates);
router.post('/addmemberschedule', addMemberSchedule);

export default router;