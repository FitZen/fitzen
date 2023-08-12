import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all goals
const getGoals = asyncHandler(async (createdBy) => {
    const sql = 'SELECT * FROM goal WHERE created_by=$1 ORDER BY end_date;';
    const result = await query(sql, [createdBy]);

    return result.rows;
});


export {
    getGoals,
};