import express from "express";
const router = express.Router();
import {
    getAllTaskDates,
    getAllTasksDayBased,
    addMemberSchedule
} from "../controllers/scheduleController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get('/gettasksdates', getAllTaskDates);
router.get('/gettasksdaybased', getAllTasksDayBased);
router.post('/addmemberschedule', addMemberSchedule);

export default router;