import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// find shakebar item by id
const findShakebarItemById = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM shakebarItem WHERE id = $1;';
    const result = await query(sql, [id]);

    return result.rows[0];
});


// find shakebar item by name
const findShakebarItemByName = asyncHandler(async (name) => {
    const sql = 'SELECT * FROM shakebarItem WHERE name = $1;';
    const result = await query(sql, [name]);

    return result.rows[0];
});


// get all shakebar items
const allShakebarItems = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakebarItem ORDER BY name;'
    const result = await query(sql);

    return result.rows;
});


// add shakebar item
const addShakebarItem = asyncHandler(async (id, name, category, description, price, image, availableCount) => {
    const sql = 'INSERT INTO shakebarItem (id, name, category, description, price, image, available_count) \n' +
                        'VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;';
    const result = await query(sql, [id, name, category, description, price, image, availableCount]);

    return result.rows[0].id;
});



export {
    findShakebarItemById,
    findShakebarItemByName,
    allShakebarItems,
    addShakebarItem,
};