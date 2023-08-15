import express from "express";
const router = express.Router();
import {
    getAllReceptionists,
    addNewReceptionist,
} from "../controllers/receptionistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


// router.get("/getreceptionists",protect, permit('Admin'), getAllReceptionists);
// router.post("/addreceptionist",protect, permit('Admin'), addNewReceptionist);
router.get("/getreceptionists", getAllReceptionists);
router.post("/addreceptionist", addNewReceptionist);


export default router;