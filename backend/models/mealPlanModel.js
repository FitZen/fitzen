import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get meal plans from specific trainer
const getMealPlans = asyncHandler(async (createdBy) => {
    console.log("user from model : ", createdBy)
    const sql = `SELECT * FROM mealPlan WHERE created_by='TR0001' ORDER BY created_on DESC;`;
    console.log("result from model : ", sql)
    const result = await query(sql);
    console.log("result from model : ", result.rows)


    return result.rows;
});


const addMealPlan = asyncHandler(async (name, breakfast, lunch, dinner, preWorkout, postWorkout, note, createdBy) => {
    const sql = 'INSERT INTO mealPlan (name, breakfast, lunch, dinner, pre_workout, post_workout, note, created_by) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id;';
    const result = await query(sql, [name, breakfast, lunch, dinner, preWorkout, postWorkout, note, createdBy]);

    return result.rows[0].id;
});


export {
    getMealPlans,
    addMealPlan,
}