import express from "express";
const router = express.Router();
import {
    getAllShakebarItems,
    addNewShakebarItem,
} from "../controllers/shakebarItemController.js";
import {
    getShakebarOrder,
    setShakebarOrderStatus,
    getAllShakebarOrders
} from "../controllers/shakebarOrderController.js";


router.get("/items", getAllShakebarItems);
router.post("/item", addNewShakebarItem);

router.get('/orders', getAllShakebarOrders);
router.get('/order/:orderId', getShakebarOrder);
router.patch('/order', setShakebarOrderStatus);


export default router;