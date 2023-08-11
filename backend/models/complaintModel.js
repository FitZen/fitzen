import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all handled complaints by specific admin
const getHandledComplaints = asyncHandler(async (handledBy) => {
    const sql = 'SELECT * FROM complaint WHERE is_handled=true AND handled_by=$1 ORDER BY handled_on DESC;';
    const result = await query(sql, [handledBy]);

    return result.rowCount !== 0 ? result.rows : null;
});


// get all unhandled complaints
const getUnhandledComplaints = asyncHandler(async (handledByUserId) => {
    const sql = 'SELECT * FROM complaint WHERE is_handled=false ORDER BY added_on DESC;'
    const result = await query(sql);

    return result.rowCount !== 0 ? result.rows : null;
});


// add complaint
const addComplaint = asyncHandler(async (subject, content, addedBy) => {
    const sql = 'INSERT INTO complaint (subject, content, added_by) VALUES ($1, $2, $3) RETURNING id';
    const result = await query(sql, [subject, content, addedBy]);

    return result.rows[0].id;
});

export{
    getHandledComplaints,
    getUnhandledComplaints,
    addComplaint,
};