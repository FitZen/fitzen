import e from 'express';
import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all shakebar items
const getShakeBarItems = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakeBarItems;'
    const result = await query(sql);

    return result.rows;
});


// add shakebar item
const addShakeBarItem = asyncHandler(async (name, unitPrice, category, quantity, description) => {
    const sql = 'INSERT INTO shakeBarItems (name, unit_price, quantity, category, description) VALUES ($1, $2, $3, $4,$5) RETURNING id';
    const result = await query(sql, [name, unitPrice, quantity, category, description]);


    return result.rows[0].id;
});



export {
    getShakeBarItems,
    addShakeBarItem,
};