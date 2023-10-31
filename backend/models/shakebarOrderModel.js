import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all orders
const allShakebarOrders = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakebarOrder ORDER BY placed_on;';
    const result = await query(sql);

    if (result.rowCount > 0) {
        return result.rows;
    } else {
        return null;
    }
});


// find order
const shakebarOrder = asyncHandler(async (orderId) => {
    const sql = 'SELECT * FROM shakebarOrder WHERE id = $1;';
    const result = await query(sql, [orderId]);

    if (result.rowCount > 0) {
        return result.rows[0];
    } else {
        return null;
    }
});


// update order status
const updateShakebarOrderStatus = asyncHandler(async (orderId, status) => {
    const sql = 'UPDATE shakebarOrder SET status = $1 WHERE id = $2 RETURNING id;';
    const result = await query(sql, [status, orderId]);

    if (result.rowCount > 0) {
        return result.rows[0].id;
    } else {
        return null;
    }
});


export {
    allShakebarOrders,
    shakebarOrder,
    updateShakebarOrderStatus,
}