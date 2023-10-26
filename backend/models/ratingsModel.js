import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get instructor ratings
const instructorRatings = asyncHandler(async (instructor_id) => {
    const sql = 'SELECT * FROM ratings WHERE id = $1;';
    const result = await query(sql, [instructor_id]);

    return result.rows[0];
});


export {
    instructorRatings,
};