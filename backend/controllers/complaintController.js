import asyncHandler from 'express-async-handler';
import {
    getHandledComplaints,
    getUnhandledComplaints,
    addComplaint,
} from "../models/complaintModel.js";


// get all handled complaints
const getAllHandledComplaints = asyncHandler(async (req, res) => {
    const handledBy = req.user.id;
    const handledComplaints = await getHandledComplaints(handledBy);

    if (handledComplaints === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: handledComplaints,
    });
});


// get all unhandled complaints
const getAllUnhandledComplaints = asyncHandler(async (req, res) => {
    const unHandledComplaints = await getUnhandledComplaints();


    if (unHandledComplaints === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: unHandledComplaints,
    });
});


//add complaint
const addNewComplaint = asyncHandler(async (req, res) => {
    const { subject, content } = req.body;
    const addedBy = req.user.id;

    const result = await addComplaint(subject, content, addedBy);

    if (! result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Complaint added successfully.",
    });
});


export {
    getAllHandledComplaints,
    getAllUnhandledComplaints,
    addNewComplaint,
};
