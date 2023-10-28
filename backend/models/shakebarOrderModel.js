import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all orders
const allShakebarOrders = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakebarOrder ORDER BY placed_on;';
    const result = await query(sql);

    return result.rows;
});


// find order
const shakebarOrder = asyncHandler(async (orderId) => {
    const sql = 'SELECT * FROM shakebarOrder WHERE id = $1;';
    const result = await query(sql, [orderId]);

    return result.rows[0];
});


// get all pending orders
const allPendingShakebarOrders = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakebarOrder WHERE status = \'Pending\' ORDER BY placed_on;';
    const result = await query(sql);

    return result.rows;
});


// get all closed orders
const allClosedShakebarOrders = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakebarOrder WHERE status = \'Closed\' ORDER BY placed_on;';
    const result = await query(sql);

    return result.rows;
});


export {
    allShakebarOrders,
    shakebarOrder,
    allPendingShakebarOrders,
    allClosedShakebarOrders,
}