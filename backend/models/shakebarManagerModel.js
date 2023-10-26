import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import hashPassword from "../utils/hashPassword.js";


// get all shakebar managers
const getShakebarManagers = asyncHandler(async () => {
    const sql = 'SELECT * FROM shakeBarManager ORDER BY added_on DESC;';
    const result = await query(sql);

    return result.rows;
});


// add shakebar manager
const addShakebarManager = asyncHandler(async (id, nic, first_name, last_name, email, password, contact_no, added_by) => {
    const hashedPassword = await hashPassword(password);

    const sql = 'INSERT INTO shakeBarManager (id, nic, first_name, last_name, email, password, contact_no, added_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;';
    const result = await query(sql, [id, nic, first_name, last_name, email, hashedPassword, contact_no, added_by]);

    return result.rows[0].id;
});


// shakebar manager count
const shakebarManagerCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Shake Bar Manager\' AND (status = \'Active\' OR status = \'Inactive\');';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


export{
    getShakebarManagers,
    addShakebarManager,
    shakebarManagerCount,
};