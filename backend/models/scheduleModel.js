import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';

//get all tasks dates
const getTasksDates = asyncHandler(async (createdBy) => {
    const sql = 'SELECT start_date FROM schedule WHERE created_by=$1 OR created_for=$1;';
    const result = await query(sql, [createdBy]);

    return result.rows;
});

//get day based tasks
const getTasksDayBased = asyncHandler(async (createdBy,clickedDate) => {
    
    const sql = 'SELECT * FROM schedule WHERE (created_by=$1 OR created_for=$1) AND start_date=$2 ORDER BY start_time;';
    const result = await query(sql, [createdBy,clickedDate]);

    return result.rows;
});

//get next task
const getNextDayTask = asyncHandler(async (createdBy) => {
    const sql = 'SELECT * FROM schedule WHERE created_by=$1 AND start_date=CURRENT_DATE AND start_time>CURRENT_TIME ORDER BY start_time LIMIT 1;';
    const result = await query(sql, [createdBy]);

    return result.rows[0];
});


//get current day tasks
const getCurrentDayTasks = asyncHandler(async (createdBy) => {
    const sql = 'SELECT * FROM schedule WHERE created_by=$1 AND start_date=CURRENT_DATE ORDER BY start_time;';
    const result = await query(sql, [createdBy]);

    return result.rows;
});

//Add a new task to member's schedule
const addTask = asyncHandler(async (title, description, startDate, startTime, createdBy) => {
    const sql = 'INSERT INTO schedule (title, description, start_date, start_time, created_by) VALUES ($1, $2, $3, $4, $5) RETURNING id;';
    const result = await query(sql, [title, description, startDate, startTime, createdBy]);

    return result.rows[0].id;
});


//Add a new session for physical members
const addSessionTrainer = asyncHandler(async (title, description, startDate, startTime, createdBy, memberID) => {
    const sql = 'INSERT INTO schedule (title, description, start_date, start_time, created_by, created_for) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;';
    const result = await query(sql, [title, description, startDate, startTime, createdBy, memberID]);

    return result.rows[0].id;
});

//Add a new session for virtual members
const addVirtualSessionTrainer = asyncHandler(async (title, description, startDate, startTime, createdBy, memberID) => {
    const sql = 'INSERT INTO schedule (title, description, start_date, start_time, created_by, created_for, zoom_link) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id;';
    const result = await query(sql, [title, description, startDate, startTime, createdBy, memberID, 'zoom/link']);

    return result.rows[0].id;
});

//To check the time is already allocated or not
const checkTime = asyncHandler(async (startDate, startTime, createdBy) => {
    // Parse the startTime into hours, minutes, and seconds
    const [hours, minutes, seconds] = startTime.split(':').map(Number);
  
    // Create a new Date object for the provided time
    const timeToCheck = new Date();
    timeToCheck.setHours(hours);
    timeToCheck.setMinutes(minutes);
    timeToCheck.setSeconds(seconds);
  
    // Calculate one hour earlier and one hour later
    const oneHourEarlier = new Date(timeToCheck.getTime() - 60 * 60 * 1000); // 60 minutes * 60 seconds * 1000 milliseconds
    const oneHourLater = new Date(timeToCheck.getTime() + 60 * 60 * 1000);
  
    // Format the times as "HH:MM:SS"
    const formattedOneHourEarlier = `${String(oneHourEarlier.getHours()).padStart(2, '0')}:${String(oneHourEarlier.getMinutes()).padStart(2, '0')}:${String(oneHourEarlier.getSeconds()).padStart(2, '0')}`;
    const formattedOneHourLater = `${String(oneHourLater.getHours()).padStart(2, '0')}:${String(oneHourLater.getMinutes()).padStart(2, '0')}:${String(oneHourLater.getSeconds()).padStart(2, '0')}`;
  
    // Execute an SQL query to check for records in the database
    const sql = 'SELECT COUNT(*) FROM schedule WHERE start_date = $1 AND start_time >= $2 AND start_time <= $3 AND created_by = $4;';
    const result = await query(sql, [startDate, formattedOneHourEarlier, formattedOneHourLater, createdBy]);
  
    // Check if any records were found
    const recordCount = result.rows[0].count;
  
    // Return 1 if records were found, otherwise return 0
    return recordCount > 0 ? 1 : 0;
  });
  

export {
    getTasksDates,
    getTasksDayBased,
    getNextDayTask,
    getCurrentDayTasks,
    addTask,
    addSessionTrainer,
    checkTime,
    addVirtualSessionTrainer
};