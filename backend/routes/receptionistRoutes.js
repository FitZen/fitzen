import express from "express";
const router = express.Router();
import {
    getAllReceptionists,
    addNewReceptionist,
    getReceptionistCount,
    getActiveReceptionistCount,
} from "../controllers/receptionistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/getreceptionists",protect, permit('Admin'), getAllReceptionists);
// router.post("/addreceptionist",protect, permit('Admin'), addNewReceptionist);
router.get("/getreceptionists", getAllReceptionists);
router.post("/addreceptionist", addNewReceptionist);


router.get("/count", protect, permit('Admin'), getReceptionistCount);

router.get("/count/active", getActiveReceptionistCount);


export default router;