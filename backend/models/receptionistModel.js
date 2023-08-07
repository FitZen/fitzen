import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get all receptionists
const getReceptionists = asyncHandler(async () => {
    const sql = 'SELECT * FROM receptionist ORDER BY added_on DESC;';
    const result = await query(sql);

    if (result.rows.length === 0) {
        return null;
    }

    return result.rows;
});


// add a receptionist
const addReceptionist = asyncHandler(async (receptionist) => {

});


export {
    getReceptionists,
}