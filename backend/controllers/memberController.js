import asyncHandler from 'express-async-handler';
import {
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
    addNewPhysicalMember
} from "../models/memberModal.js";


//get all view members
const getAllViewMembers = asyncHandler(async (req, res) => {
    const members = await getViewMembers();

    if (members === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: members,
    });
});


//get all view physical members
const getAllViewPhysicalMembers = asyncHandler(async (req, res) => {
    const members = await getViewPhysicalMembers();

    if (members === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: members,
    });
});


//get all view virtual members
const getAllViewVirtualMembers = asyncHandler(async (req, res) => {
    const members = await getViewVirtualMembers();

    if (members === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: members,
    });
});


// add new physical member
const addPhysicalMember = asyncHandler(async (req, res) => {
    const memberData = req.body;
    const addedByUserId = req.user.id;

    const result = await addNewPhysicalMember(memberData, addedByUserId);

    if (! result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Member added successfully.",
    });
});

export {
    getAllViewMembers,
    getAllViewPhysicalMembers,
    getAllViewVirtualMembers,
    addPhysicalMember,
};