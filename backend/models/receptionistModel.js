import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get details of all receptionists
const getReceptionists = asyncHandler(async () => {
    // const sql = 'SELECT * FROM announcement ORDER BY posted_on DESC;';
    // const result = await query(sql);
    //
    // return result.rows;

    console.log("getReceptionists: model");
});


export {
    getReceptionists,
}