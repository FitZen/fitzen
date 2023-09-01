import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


//view all trainers
const getViewTrainers = asyncHandler(async () => {
    const sql = 'SELECT * FROM trainer ORDER BY added_on DESC;';
    const result = await query(sql);

    return result.rows;
});

export{
    getViewTrainers,
};