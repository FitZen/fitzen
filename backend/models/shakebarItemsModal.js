import e from 'express';
import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all shakebar items
const getShakeBarItems = asyncHandler(async () => {
    const sql = 'SELECT sbi.id, sbi.name, itm.availble_count, sbi.unit_price, sbi.category, sbi.description, sbi.image FROM shakeBarItems sbi INNER JOIN itemDetails itm ON sbi.id = itm.id ORDER BY sbi.id DESC;'
    const result = await query(sql);

    return result.rows;
});


// add shakebar item
const addShakeBarItem = asyncHandler(async (name, unitPrice, category, quantity, description, added_by) => {
    const sql = 'INSERT INTO shakeBarItems (name, unit_price, category, description, added_by) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    const result = await query(sql, [name, unitPrice, category, description, added_by]);

    const itemId = result.rows[0].id;
    
    const sql2 = 'INSERT INTO itemDetails (id, availble_count, updated_by) VALUES ($1, $2 ,$3) RETURNING id';
    const result2 = await query(sql2, [itemId, quantity, added_by]);

    return result.rows[0].id, result2.rows[0].id;
});



export {
    getShakeBarItems,
    addShakeBarItem,
};