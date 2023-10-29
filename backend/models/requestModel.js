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


// is having pending request
const isHavingPendingRequest = asyncHandler(async (memberId) => {
    const sql = 'SELECT * FROM request WHERE member_id = $1 AND status = \'Pending\';';
    const result = await query(sql, [memberId]);

    if (result.rowCount > 0) {
        return true
    } else {
        return false;
    }
});


// add a request
const addRequest = asyncHandler(async (memberId, trainerId, packageType) => {
    const sql = 'INSERT INTO request (member_id, trainer_id, package)\n' +
                        'VALUES ($1, $2, $3) RETURNING id;';
    const result = await query(sql, [memberId, trainerId, packageType]);

    if (result.rowCount > 0) {
        return result.rows[0].id;
    } else {
        return null;
    }
});


// update request status
const updateRequestStatus = asyncHandler(async (requestId, status) => {
    const sql = 'UPDATE request SET status = $1 WHERE id = $2 RETURNING id;';
    const result = await query(sql, [status, requestId]);

    if (result.rowCount > 0) {
        return result.rows[0].id;
    } else {
        return null;
    }
});


export {
    allRequests,
    isHavingPendingRequest,
    addRequest,
    updateRequestStatus,
}