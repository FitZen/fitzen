import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import hashPassword from "../utils/hashPassword.js";


//view all trainers
const getViewPhysiotherapists = asyncHandler(async () => {
    const sql = 'SELECT p.*, r.rating, r.count\n' +
                        'FROM physiotherapist p\n' +
                        'LEFT JOIN ratings r ON p.id = r.id\n' +
                        'WHERE p.id IN (SELECT id FROM users WHERE status IN (\'Active\', \'Inactive\'))\n' +
                        'ORDER BY (r.rating * 1.0 / r.count) DESC;';
    const result = await query(sql);

    return result.rows;
});


// add physiotherapist
const addPhysiotherapist = asyncHandler(async (id, nic, first_name, last_name, email, password, contact_no, address, dob, gender, qualification, added_by) => {
    const hashedPassword = await hashPassword(password);

    const sql = 'INSERT INTO physiotherapist (id, nic, first_name, last_name, email, password, contact_no, address, dob, gender, qualification, added_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING id;';
    const result = await query(sql, [id, nic, first_name, last_name, email, hashedPassword, contact_no, address, dob, gender, qualification, added_by]);

    return result.rows[0].id;
});


// physiotherapist count
const physiotherapistCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Physiotherapist\' AND (status = \'Active\' OR status = \'Inactive\');';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// active physiotherapist count
const activePhysiotherapistCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Physiotherapist\' AND status = \'Active\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


//newly added physiotherapist count
const physiotherapistCountToday = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM physiotherapist WHERE added_on::date = current_date;';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});



export{
    getViewPhysiotherapists,
    addPhysiotherapist,
    physiotherapistCount,
    activePhysiotherapistCount,
    physiotherapistCountToday,
};