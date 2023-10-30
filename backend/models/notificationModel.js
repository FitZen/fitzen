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


// add notification
const addNotification = asyncHandler(async (title, content, receiverId) => {
    const sql = 'INSERT INTO notification (title, content, receiver_id) VALUES ($1, $2, $3) RETURNING id;';
    const result = await query(sql, [title, content, receiverId]);

    if (result.rowCount > 0) {
        return result.rows[0].id;
    } else {
        return null;
    }
});


// set notification as read
const setNotificationAsRead = asyncHandler(async (notificationId) => {
    const sql = 'UPDATE notification SET is_read = true WHERE id = $1;';
    const result = await query(sql, [notificationId]);

    return result.rowCount > 0;
});


export {
    getNotifications,
    addNotification,
    setNotificationAsRead,
}