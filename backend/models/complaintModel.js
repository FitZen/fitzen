import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


//get all complaints
const getComplaints = asyncHandler(async () => {
    const sql = 'SELECT * FROM complaint ORDER BY added_on DESC;';
    const result = await query(sql);

    return result.rows;
});


//get all handled complaints
const getHandledComplaints = asyncHandler(async (handledByUserId) => {

    const sql = "SELECT * FROM complaint WHERE is_handled = true AND handled_by = $1 ORDER BY added_on DESC;";
    const result = await query(sql, [handledByUserId]);
    
    return result.rows;
});


//add complaint
const addComplaint = asyncHandler(async (complaint,addByUserId) => {
    const sql = 'INSERT INTO complaint (subject, content, added_by) VALUES ($1, $2, $3) RETURNING id';
    const result = await query(sql, [complaint.subject, complaint.content, addByUserId]);
    
    return result.rows[0];
});

export{
    getComplaints,
    getHandledComplaints,
    addComplaint,
};