import asyncHandler from 'express-async-handler';
import {
    allShakebarOrders,
    shakebarOrder,
    allPendingShakebarOrders,
    allClosedShakebarOrders,
} from '../models/shakebarOrderModel.js';
import generateShakebarOrderId from "../utils/generateShakebarOrderId.js";


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


// get all pending orders
const getAllPendingShakebarOrders = asyncHandler(async (req, res) => {
    const pendingOrders = await allPendingShakebarOrders();

    res.status(200).json({
        data: pendingOrders
    });
});


// get all closed orders
const getAllClosedShakebarOrders = asyncHandler(async (req, res) => {
    const closedOrders = await allClosedShakebarOrders();

    res.status(200).json({
        data: closedOrders
    });
});


export {
    getAllShakebarOrders,
    getShakebarOrder,
    getAllPendingShakebarOrders,
    getAllClosedShakebarOrders,
}