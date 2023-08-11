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

    res.status(handledComplaints !== undefined ? 200 : 500).json({
        status: handledComplaints !== undefined ? "success" : "fail",
        data: handledComplaints !== undefined ? handledComplaints : null,
        message: handledComplaints !== undefined ? "Handled complaints fetched successfully." : "Something went wrong!",
    });
});


// get all unhandled complaints
const getAllUnhandledComplaints = asyncHandler(async (req, res) => {
    const unHandledComplaints = await getUnhandledComplaints();

    res.status(unHandledComplaints !== undefined ? 200 : 500).json({
        status: unHandledComplaints !== undefined ? "success" : "fail",
        data: unHandledComplaints !== undefined ? unHandledComplaints : null,
        message: unHandledComplaints !== undefined ? "Unhandled complaints fetched successfully." : "Something went wrong!",
    });
});


//add complaint
const addNewComplaint = asyncHandler(async (req, res) => {
    const { subject, content } = req.body;
    const addedBy = req.user.id;

    const result = await addComplaint(subject, content, addedBy);

    res.status(result !== undefined ? 201 : 500).json({
        status: result !== undefined ? "success" : "fail",
        data: result !== undefined ? result : null,
        message: result !== undefined ? "Complaint added successfully." : "Adding complaint unsuccessful.",
    });
});

export {
    getAllHandledComplaints,
    getAllUnhandledComplaints,
    addNewComplaint,
};