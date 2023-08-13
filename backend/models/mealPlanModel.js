import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get meal plans from specific trainer
const getMealPlans = asyncHandler(async (createdBy) => {
    const sql = 'SELECT * FROM mealPlan WHERE created_by=$1 ORDER BY created_on DESC;';
    const result = await query(sql, [createdBy]);

    return result.rows;
});


export {
    getMealPlans,
}