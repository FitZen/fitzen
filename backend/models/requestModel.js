import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all requests for a trainer
const allRequests = asyncHandler(async (trainerId) => {
    const sql = 'SELECT * FROM request WHERE trainer_id = $1 ORDER BY created_on;';
    const result = await query(sql, [trainerId]);

    if (result.rowCount > 0) {
        return result.rows;
    } else {
        return null;
    }
});


export {
    allRequests,
}