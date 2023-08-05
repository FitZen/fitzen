import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';

const getAnnouncements = asyncHandler(async () => {
    const sql = 'SELECT * FROM announcement ORDER BY posted_on DESC;';
    const result = await query(sql);

    return result.rows;
});

export {
    getAnnouncements,
};