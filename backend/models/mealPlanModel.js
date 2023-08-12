import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get meal plans from specific trainer
const getMealPlans = asyncHandler(async () => {
    // const sql = 'SELECT * FROM announcement ORDER BY posted_on DESC;';
    // const result = await query(sql);
    //
    // return result.rows;

    console.log("getMealPlans: model");
});


export {
    getMealPlans,
}