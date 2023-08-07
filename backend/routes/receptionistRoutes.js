import express from "express";
const router = express.Router();
import {
    getAllReceptionists,
    addReceptionist,
} from "../controllers/receptionistController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/receptionist",protect, permit('Admin'), getAllReceptionists);
router.post("/receptionist",protect, permit('Admin'), addReceptionist);


export default router;