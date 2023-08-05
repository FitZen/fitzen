import asyncHandler from 'express-async-handler';
import {
    getAnnouncements,
} from "../models/announcementModel.js";

const getAllAnnouncements = asyncHandler(async (req, res) => {
    const announcements = await getAnnouncements();

    console.log(announcements);
    //res.status(200).json(announcements);
});

export {
    getAllAnnouncements,
};