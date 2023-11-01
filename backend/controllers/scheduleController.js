import asyncHandler from 'express-async-handler';
import {
    getTasksDates,
    getTasksDayBased,
    getCurrentDayTasks,
    getNextDayTask,
    addTask,
    updateCurrentScheduleStatus
} from "../models/scheduleModel.js";

//to format the dates as YYYY-MM-DD
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}


//get all tasks dates

const getAllTaskDates = asyncHandler(async (req, res) => {
    const createdBy = req.query.userID;
    const tasks = await getTasksDates(createdBy);
    //console.log("tasks from backend : ", tasks)

    const formattedDates = tasks.map(task => formatDate(task.start_date));
    //console.log("formattedDates from backend : ", formattedDates)

    if (tasks === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: formattedDates,
    });
});


//get next task
const getNextTask = asyncHandler(async (req, res) => {
    const createdBy = req.query.userID;
    const tasks = await getNextDayTask(createdBy);
    //console.log("tasks from backend : ", tasks)

    if (tasks === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: tasks,
    });
});


//get currentday tasks
const getAllCurrentDayTasks = asyncHandler(async (req, res) => {
    const createdBy = req.query.userID;

    const tasks = await getCurrentDayTasks(createdBy);

    //console.log("tasks from backend : ", tasks)

    if (tasks === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: tasks,
    });
});

//get all tasks based on date
const getAllTasksDayBased = asyncHandler(async (req, res) => {
    const createdBy = req.query.userID;
    const clickedDate = req.query.clickedDate;

    const tasks = await getTasksDayBased(createdBy, clickedDate);

    //console.log("tasks from backend : ", tasks)

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


const updateScheduleStatus = asyncHandler(async (req, res) => {
    const {
        id,
        status
    } = req.body;
    //console.log("data from backend : ", req.body)
    const result = await updateCurrentScheduleStatus(id, status);

    //console.log("result from backend : ", result)

    if (!result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Schedule status updated successfully.",
    });
});

export {
    getAllTaskDates,
    getAllTasksDayBased,
    getAllCurrentDayTasks,
    getNextTask,
    addMemberSchedule,
    updateScheduleStatus
};