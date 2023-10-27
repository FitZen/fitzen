import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';

//get all tasks dates
const getTasksDates = asyncHandler(async (createdBy) => {
    const sql = 'SELECT start_date FROM memberSchedule WHERE created_by=$1;';
    const result = await query(sql, [createdBy]);

    return result.rows;
});

//Add a new task to member's schedule
const addTask = asyncHandler(async (title, description, startDate, startTime, createdBy) => {
    const sql = 'INSERT INTO memberSchedule (title, description, start_date, start_time, created_by) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
    const result = await query(sql, [title, description, startDate, startTime, createdBy]);

    return result.rows[0].id;
});

export {
    getTasksDates,
    addTask
};