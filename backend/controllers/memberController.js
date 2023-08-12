import asyncHandler from 'express-async-handler';
import {
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
} from "../models/memberModal.js";


//get all view members
const getAllViewMembers = asyncHandler(async (req, res) => {
    const members = await getViewMembers();

    res.status(200).json(members);
});


//get all view physical members
const getAllViewPhysicalMembers = asyncHandler(async (req, res) => {
    const members = await getViewPhysicalMembers();

    res.status(200).json(members);
});


//get all view virtual members
const getAllViewVirtualMembers = asyncHandler(async (req, res) => {
    const members = await getViewVirtualMembers();

    res.status(200).json(members);
});


export {
    getAllViewMembers,
    getAllViewPhysicalMembers,
    getAllViewVirtualMembers,
};