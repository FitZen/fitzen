import express from "express";
const router = express.Router();
import {
    getAllShakebarItems,
    addNewShakebarItem,
} from "../controllers/shakebarItemController.js";
import {
    getAllClosedShakebarOrders,
    getShakebarOrder,
    setShakebarOrderStatus,
    getAllPendingShakebarOrders,
    getAllShakebarOrders
} from "../controllers/shakebarOrderController.js";
import { protect, permit } from "../middleware/authMiddleware.js";


router.get("/items", getAllShakebarItems);
router.post("/item", addNewShakebarItem);

router.get('/orders', getAllShakebarOrders);
router.get('/order/:orderId', getShakebarOrder);
router.patch('/order', setShakebarOrderStatus);
router.get('/orders/pending', getAllPendingShakebarOrders);
router.get('/orders/closed', getAllClosedShakebarOrders);


export default router;