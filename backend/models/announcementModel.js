import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all announcements
const getAnnouncements = asyncHandler(async () => {
    const sql = 'SELECT * FROM announcement ORDER BY posted_on DESC;';
    const result = await query(sql);

    return result.rows;
});


//add announcement
const addAnnouncement = asyncHandler(async (announcement) => {
    const sql = 'INSERT INTO announcement (title, content, posted_by) VALUES ($1, $2, $3) RETURNING id';
    const result = await query(sql, [announcement.title, announcement.content, announcement.posted_by]);

    return result.rows[0];
});


export {
    getAnnouncements,
    addAnnouncement,
};