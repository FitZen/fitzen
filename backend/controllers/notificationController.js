import asyncHandler from 'express-async-handler';
import {
    getNotifications
} from "../models/notificationModel.js";


// get notifications
const getAllNotifications = asyncHandler(async (req, res) => {
    const receiverId = req.params.receiverId;
    const notifications = await getNotifications(receiverId);

    res.status(200).json({
        data: notifications,
    });
});


export {
    getAllNotifications,
}