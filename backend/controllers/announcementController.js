import asyncHandler from 'express-async-handler';
import {
    getAnnouncements,
    addAnnouncement,
} from "../models/announcementModel.js";


// get all announcements
const getAllAnnouncements = asyncHandler(async (req, res) => {
    const announcements = await getAnnouncements();

    res.status(200).json(announcements);
});


//add announcement
const addNewAnnouncement = asyncHandler(async (req, res) => {
    const announcement = req.body;
    const addByUserId = req.user.id;

    if (!announcement.title.trim() || !announcement.content.trim()) {
        res.status(400).json({ message: "Title and content are required." });
        return;
    }

    res.status(200).json(announcement);
    const result = await addAnnouncement(announcement, addByUserId);

});


export {
    getAllAnnouncements,
    addNewAnnouncement,
};