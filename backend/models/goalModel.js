import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all goals
const getGoals = asyncHandler(async (createdBy) => {
    const sql = 'SELECT * FROM goal WHERE created_by=$1 ORDER BY end_date;';
    const result = await query(sql, [createdBy]);

    return result.rows;
});


// add goal
const addGoal = asyncHandler(async (title, description, startDate, endDate, createdBy, status) => {
    const sql = 'INSERT INTO goal (title, description, start_date, end_date, created_by, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;';
    const result = await query(sql, [title, description, startDate, endDate, createdBy, status]);

    return result.rows[0].id;
});


export {
    getGoals,
    addGoal,
};