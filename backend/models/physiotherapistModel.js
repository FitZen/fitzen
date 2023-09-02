import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


//view all trainers
const getViewPhysiotherapists = asyncHandler(async () => {
    const sql = 'SELECT * FROM physiotherapist ORDER BY added_on DESC;';
    const result = await query(sql);

    return result.rows;
});

export{
    getViewPhysiotherapists
};