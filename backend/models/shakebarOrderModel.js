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


const addShakebarOrder = asyncHandler(async (orderId, totalAmount, orderBy) => {
    const sql = 'INSERT INTO shakebarOrder (id, total_amount, placed_by) VALUES ($1, $2, $3) RETURNING id;';
    const result = await query(sql, [orderId, totalAmount, orderBy]);

    if (result.rowCount > 0) {
        return result.rows[0].id;
    } else {
        return null;
    }
});


const addShakebarOrderItems = asyncHandler(async (item, orderId) => {
    const sql = 'INSERT INTO shakebarOrderItem (item_id, quantity, price, amount, order_id) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
    const result = await query(sql, [item.id, item.qty, item.price, item.amount, orderId]);

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
    addShakebarOrder,
    addShakebarOrderItems,
}