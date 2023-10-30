import asyncHandler from 'express-async-handler';
import {
    allShakebarOrders,
    shakebarOrder,
    updateShakebarOrderStatus,
} from '../models/shakebarOrderModel.js';


// get all orders
const getAllShakebarOrders = asyncHandler(async (req, res) => {
    const allOrders = await allShakebarOrders();

    res.status(200).json({
        data: allOrders
    });
});


// find order
const getShakebarOrder = asyncHandler(async (req, res) => {
    const orderId = req.params.orderId;
    const order = await shakebarOrder(orderId);

    res.status(200).json({
        data: order
    });
});


// set order status
const setShakebarOrderStatus = asyncHandler(async (req, res) => {
    const {orderId, status} = req.body;
    const updatedOrderId = await updateShakebarOrderStatus(orderId, status);

    res.status(200).json({
        data: updatedOrderId
    });
});


export {
    getAllShakebarOrders,
    getShakebarOrder,
    setShakebarOrderStatus,
}