import asyncHandler from 'express-async-handler';
import {
    getAnnouncements,
    addAnnouncement,
} from "../models/announcementModel.js";


// get all announcements
const getAllAnnouncements = asyncHandler(async (req, res) => {
    const announcements = await getAnnouncements();

    res.status(announcements !== undefined ? 200 : 500).json({
        status: announcements !== undefined ? "success" : "fail",
        data: announcements !== undefined ? announcements : null,
        message: announcements !== undefined ? "Announcements fetched successfully." : "Something went wrong!",
    });
});


// add announcement
const addNewAnnouncement = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const addedBy = req.user.id;

    const result = await addAnnouncement(title, content, addedBy);

    res.status(result !== undefined ? 201 : 500).json({
        status: result !== undefined ? "success" : "fail",
        data: result !== undefined ? result : null,
        message: result !== undefined ? "Announcement added successfully." : "Adding announcement unsuccessful.",
    });
});


export {
    getAllAnnouncements,
    addNewAnnouncement,
};