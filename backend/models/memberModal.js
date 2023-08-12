import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


//get all view members
const getViewMembers = asyncHandler(async () => {
    const sql = 'SELECT first_name, last_name, nic FROM virtualMember UNION SELECT first_name, last_name, nic FROM physicalMember ORDER BY first_name ASC;';
    const result = await query(sql);

    return result.rows;
});


//get all view physical members
const getViewPhysicalMembers = asyncHandler(async () => {
    const sql = 'SELECT first_name, last_name, nic FROM physicalMember ORDER BY first_name ASC;';
    const result = await query(sql);

    return result.rows;
});


//get all view virtual members
const getViewVirtualMembers = asyncHandler(async () => {
    const sql = 'SELECT first_name, last_name, nic FROM virtualMember ORDER BY first_name ASC;';
    const result = await query(sql);

    return result.rows;
});


//add new physical member


export{
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
};