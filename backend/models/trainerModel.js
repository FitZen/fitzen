import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import hashPassword from "../utils/hashPassword.js";


//view all trainers
const getViewTrainers = asyncHandler(async () => {
    const sql = 'SELECT t.*, r.rating, r.count\n' +
                        'FROM trainer t\n' +
                        'LEFT JOIN ratings r ON t.id = r.id\n' +
                        'WHERE t.id IN (SELECT id FROM users WHERE status IN (\'Active\', \'Inactive\'))\n' +
                        'ORDER BY (r.rating * 1.0 / r.count) DESC;';
    const result = await query(sql);

    return result.rows;
});


// add trainer
const addTrainer = asyncHandler(async (id, nic, first_name, last_name, email, password, contact_no, address, dob, gender, qualification, mode, addedBy) => {
    const hashedPassword = await hashPassword(password);

    const sql = 'INSERT INTO trainer (id, nic, first_name, last_name, email, password, contact_no, address, dob, gender, qualification, mode, added_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id;';
    const result = await query(sql, [id, nic, first_name, last_name, email, hashedPassword, contact_no, address, dob, gender, qualification, mode, addedBy]);

    return result.rows[0].id;
});


// trainer count
const trainerCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Trainer\' AND (status = \'Active\' OR status = \'Inactive\');';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// active trainer count
const activeTrainerCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Trainer\' AND status = \'Active\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


export{
    getViewTrainers,
    addTrainer,
    trainerCount,
    activeTrainerCount,
};