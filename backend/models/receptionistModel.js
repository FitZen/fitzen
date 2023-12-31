import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';
import hashPassword from "../utils/hashPassword.js";


// get details of all receptionists
const getReceptionists = asyncHandler(async () => {
    const sql = 'SELECT * FROM receptionist ORDER BY added_on DESC;';
    const result = await query(sql);

    return result.rows;
});


// add receptionist
const addReceptionist = asyncHandler(async (id, nic, firstName, lastName, email, password, contactNo, addedBy) => {
    const hashedPassword = await hashPassword(password);

    const sql = 'INSERT INTO receptionist (id, nic, first_name, last_name, email, password, contact_no, added_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id';
    const result = await query(sql, [id, nic, firstName, lastName, email, hashedPassword, contactNo, addedBy]);

    return result.rows[0].id;
});


// receptionist count
const receptionistCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Receptionist\' AND (status = \'Active\' OR status = \'Inactive\');';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// active receptionist count
const activeReceptionistCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Receptionist\' AND status = \'Active\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


//newly added receptionist count
const receptionistCountToday = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM receptionist WHERE added_on::date = current_date;';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


export {
    getReceptionists,
    addReceptionist,
    receptionistCount,
    activeReceptionistCount,
    receptionistCountToday,
}