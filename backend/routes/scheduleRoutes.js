import express from "express";
const router = express.Router();
import {
    getAllTaskDates,
    getAllTasksDayBased,
    getAllCurrentDayTasks,
    getNextTask,
    addMemberSchedule,
    addTrainerSchedule
} from "../controllers/scheduleController.js";
import { protect, permit } from "../middleware/authMiddleware.js";

router.get('/gettasksdates', getAllTaskDates);
router.get('/gettasksdaybased', getAllTasksDayBased);
router.get('/getcurrentdaytasks', getAllCurrentDayTasks);
router.get('/getnexttask', getNextTask);
router.post('/addmemberschedule', addMemberSchedule);
router.post('/addtrainerschedule', addTrainerSchedule);

export default router;