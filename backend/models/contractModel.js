import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// check is contract exists
const existContracts = asyncHandler(async (memberId) => {
    const sql = 'SELECT * FROM contract WHERE member_id = $1 AND status = \'On going\';';
    const result = await query(sql, [memberId]);

    if (result.rowCount > 0){
        return result.rows;
    } else {
        return null;
    }
});


// create contract
const createContract = asyncHandler(async (memberId, instructorId, packageType, remainSessions, payment) => {
    const sql = 'INSERT INTO contract (member_id, instructor_id, package, remain_sessions, payment) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
    const result = await query(sql, [memberId, instructorId, packageType, remainSessions, payment]);

    if (result.rowCount > 0){
        return result.rows[0].id;
    } else {
        return null;
    }
});


export {
    existContracts,
    createContract,
}