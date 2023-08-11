import asyncHandler from 'express-async-handler';
import {
    getAnnouncements,
    addAnnouncement,
} from "../models/announcementModel.js";


// get all announcements
const getAllAnnouncements = asyncHandler(async (req, res) => {
    const announcements = await getAnnouncements();

    res.status(200).json({
        status: announcements !== undefined ? "success" : "fail",
        data: announcements !== undefined ? announcements : "",
        message: announcements !== undefined ? "" : "Something went wrong!",
    });
});


// add announcement
const addNewAnnouncement = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const addedBy = req.user.id;

    const result = await addAnnouncement(title, content, addedBy);

    res.status(200).json({
        status: result !== undefined ? "success" : "fail",
        data: result !== undefined ? result : null,
        message: result !== undefined ? "Announcement added successfully." : "Adding announcement unsuccessful.",
    });
});


export {
    getAllAnnouncements,
    addNewAnnouncement,
};