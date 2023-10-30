import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


// get notifications
const getNotifications = asyncHandler(async (receiverId) => {
    const sql = 'SELECT * FROM notification WHERE receiver_id = $1 ORDER BY created_on DESC;';
    const result = await query(sql, [receiverId]);

    if (result.rowCount > 0) {
        return result.rows;
    } else {
        return null;
    }
});


export {
    getNotifications,
}