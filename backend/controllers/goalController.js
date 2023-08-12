import asyncHandler from 'express-async-handler';
import {
    getGoals,
} from "../models/goalModel.js";
import {getAnnouncements} from "../models/announcementModel.js";


// get all announcements
const getAllGoals = asyncHandler(async (req, res) => {
    const createdBy = req.user.id;
    const goals = await getGoals(createdBy);

    if (goals === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        goals: goals,
    });
});


export {
    getAllGoals,
};