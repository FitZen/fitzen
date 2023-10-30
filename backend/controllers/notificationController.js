import asyncHandler from 'express-async-handler';
import {
    getNotifications,
    addNotification,
} from "../models/notificationModel.js";


// get notifications
const getAllNotifications = asyncHandler(async (req, res) => {
    const receiverId = req.params.receiverId;
    const notifications = await getNotifications(receiverId);

    res.status(200).json({
        data: notifications,
    });
});


// add new notification
const addNewNotification = asyncHandler(async (req, res) => {
    const { title, content, receiver_id } = req.body;

    const notificationId = await addNotification(title, content, receiver_id);

    res.status(200).json({
        data: notificationId,
    });
});


export {
    getAllNotifications,
    addNewNotification,
}