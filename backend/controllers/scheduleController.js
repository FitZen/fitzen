import asyncHandler from 'express-async-handler';
import {
    getTasksDates,
    getTasksDayBased,
    getCurrentDayTasks,
    getNextDayTask,
    addTask,
    addSessionTrainer,
    checkTime,
    addVirtualSessionTrainer,
    updateCurrentScheduleStatus
} from "../models/scheduleModel.js";

import {findUserById} from "../models/userModel.js";

//to format the dates as YYYY-MM-DD
function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
}

function formatTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0'); // Get hours (0-23) and pad with leading zero if needed
    const minutes = now.getMinutes().toString().padStart(2, '0'); // Get minutes and pad with leading zero if needed
    const seconds = now.getSeconds().toString().padStart(2, '0'); // Get seconds and pad with leading zero if needed

    const currentTime = `${hours}:${minutes}:${seconds}`;

    return currentTime;
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

    // //if(start_date > new Date()){
    //     console.log("start date: ", start_time);
    //     console.log("new date: ", formatTime());
    // //}
    //console.log("data from backend : ", req.body)
    if(start_time > formatTime()){
        const timeCheck = await checkTime(start_date, start_time, userID);
        if(timeCheck == 1){
            res.status(500);
            throw new Error("Time is already allocated!");
        }
        else{
            const result = await addTask(title, description, start_date, start_time, userID);
            if (!result) {
                res.status(500);
                throw new Error("Something went wrong!");
            }
            res.status(201).json({
                data: result,
                message: "Task added successfully.",
            });
        }
    }
    else{
        res.status(500);
        throw new Error("You cannot allocate a past time!");
    
    }
 
});


//add Trainer's schedule
const addTrainerSchedule = asyncHandler(async (req, res) => {
    const {
        title,
        description,
        start_date,
        start_time,
        userID,
        memberID
    } = req.body;
    //console.log("data from backend : ", req.body)
    const timeCheckForTrainer = await checkTime(start_date, start_time, userID);
    const timeCheckForMember = await checkTime(start_date, start_time, memberID);

    if(start_time > formatTime()){
        if((timeCheckForTrainer == 1) || (timeCheckForMember == 1)){
            res.status(500);
            throw new Error("Time is already allocated!");
        }
        else{
    
            const member = await findUserById(memberID);
            //console.log("member from backend : ", member.type);
    
            if(member.type == "Physical Member"){
                const result = await addSessionTrainer(title, description, start_date, start_time, userID, memberID);
                //const resultMember = await addSessionTrainer(title, description, start_date, start_time, userID, userID);
                if (!result) {
                    res.status(500);
                    throw new Error("Something went wrong!");
                }
                res.status(201).json({
                    data: result,
                    message: "Task added successfully.",
                });
            }else{
                const result = await addVirtualSessionTrainer(title, description, start_date, start_time, userID, memberID);
                if (!result) {
                    res.status(500);
                    throw new Error("Something went wrong!");
                }
                res.status(201).json({
                    data: result,
                    message: "Task added successfully.",
                });
            }
        }
    }else{
        res.status(500);
        throw new Error("You cannot allocate a past time!");
    
    }
    // const result = await addTask(title, description, start_date, start_time, userID);

    // //console.log("result from backend : ", result)



    // if (!result) {
    //     res.status(500);
    //     throw new Error("Something went wrong!");
    // }

    // res.status(201).json({
    //     data: result,
    //     message: "Task added successfully.",
    // });
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
    addTrainerSchedule,
    updateScheduleStatus
};