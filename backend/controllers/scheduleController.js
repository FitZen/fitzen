import asyncHandler from 'express-async-handler';
import {
    getTasksDates,
    addTask
} from "../models/scheduleModel.js";

//get all tasks dates
const getAllTaskDates = asyncHandler(async (req, res) => {
    const createdBy = req.query.userID;
    const tasks = await getTasksDates(createdBy);

    if (tasks === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: tasks,
    });
});

//add member's schedule
const addMemberSchedule = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        start_date,
        start_time,
        userID
    } = req.body;
    //console.log("data from backend : ", req.body)
    const result = await addTask(title, description, start_date, start_time, userID);

    //console.log("result from backend : ", result)

    if (!result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Task added successfully.",
    });
});

export {
    getAllTaskDates,
    addMemberSchedule
};