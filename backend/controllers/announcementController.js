import asyncHandler from 'express-async-handler';
import {
    getAnnouncements,
    addAnnouncement,
} from "../models/announcementModel.js";


// get all announcements
const getAllAnnouncements = asyncHandler(async (req, res) => {
    const announcements = await getAnnouncements();

    if (announcements === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: announcements,
    });
});


// add announcement
const addNewAnnouncement = asyncHandler(async (req, res) => {
    const { title, content } = req.body;
    const addedBy = req.user.id;

    const result = await addAnnouncement(title, content, addedBy);

    if (! result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Announcement added successfully.",
    });
});


export {
    getAllAnnouncements,
    addNewAnnouncement,
};