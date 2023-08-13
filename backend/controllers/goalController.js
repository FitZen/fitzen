import asyncHandler from 'express-async-handler';
import {
    getGoals,
    addGoal,
} from "../models/goalModel.js";
import {getAnnouncements} from "../models/announcementModel.js";


// get all announcements
const getAllGoals = asyncHandler(async (req, res) => {
    // const createdBy = req.user.id;
    const createdBy = req.query.userID;
    const goals = await getGoals(createdBy);

    if (goals === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: goals,
    });
});


// add new goal
const addNewGoal = asyncHandler(async (req, res) => {
    // const { title, description, start_date, end_date } = req.body;
    //const createdBy = req.user.id;
    const { title, content, start_date, end_date, userID } = req.body;
    console.log("data from backend : ",req.body)
    let status;

    if (new Date(start_date) > new Date()) {
        status = "Not started";
    } else {
        status = "In progress";
    }

    // const result = await addGoal(title, description, start_date, end_date, createdBy, status);
    const result = await addGoal(title, content, start_date, end_date, userID, status);

    console.log("result from backend : ",result)

    if (! result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Goal added successfully.",
    });
});


export {
    getAllGoals,
    addNewGoal,
};