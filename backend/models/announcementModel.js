import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all announcements
const getAnnouncements = asyncHandler(async () => {
    const sql = 'SELECT * FROM announcement ORDER BY posted_on DESC;';
    const result = await query(sql);

    return result.rowCount !== 0 ? result.rows : null;
});


//add announcement
const addAnnouncement = asyncHandler(async (title, content, addedBy) => {
    const sql = 'INSERT INTO announcement (title, content, posted_by) VALUES ($1, $2, $3) RETURNING id';
    const result = await query(sql, [title, content, addedBy]);

    return result.rows[0].id ;
});


export {
    getAnnouncements,
    addAnnouncement,
};