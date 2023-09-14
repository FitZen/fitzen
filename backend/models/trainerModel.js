import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import hashPassword from "../utils/hashPassword.js";


//view all trainers
const getViewTrainers = asyncHandler(async () => {
    const sql = 'SELECT * FROM trainer ORDER BY added_on DESC;';
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

    return result.rows[0].count;
});


export{
    getViewTrainers,
    addTrainer,
    trainerCount,
};