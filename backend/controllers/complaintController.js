import asyncHandler from 'express-async-handler';
import {
    getComplaints,
    getHandledComplaints,
    addComplaint,
} from "../models/complaintModel.js";


//get all complaints
const getAllComplaints = asyncHandler(async (req, res) => {
    const complaints = await getComplaints();

    res.status(200).json(complaints);
});


//get all handled complaints
const getAllHandledComplaints = asyncHandler(async (req, res) => {
    const handledByUserId = req.user.id;
    const complaints = await getHandledComplaints(handledByUserId);

    res.status(200).json(complaints);
});


//add complaint
const addNewComplaint = asyncHandler(async (req, res) => {
    const complaint = req.body;
    const addByUserId = req.user.id;

    res.status(200).json(complaint);
    const result = await addComplaint(complaint, addByUserId);
});

export {
    getAllComplaints,
    getAllHandledComplaints,
    addNewComplaint,
};