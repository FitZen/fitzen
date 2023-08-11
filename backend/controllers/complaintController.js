import asyncHandler from 'express-async-handler';
import {
    getHandledComplaints,
    getUnhandledComplaints,
    addComplaint,
} from "../models/complaintModel.js";
import {addAnnouncement} from "../models/announcementModel.js";


// get all handled complaints
const getAllHandledComplaints = asyncHandler(async (req, res) => {
    const handledBy = req.user.id;
    const handledComplaints = await getHandledComplaints(handledBy);

    res.status(200).json({
        status: handledComplaints !== undefined ? "success" : "fail",
        data: handledComplaints !== undefined ? handledComplaints : "",
        message: handledComplaints !== undefined ? "" : "Something went wrong!",
    });
});


// get all unhandled complaints
const getAllUnhandledComplaints = asyncHandler(async (req, res) => {
    const unHandledComplaints = await getUnhandledComplaints();

    res.status(200).json({
        status: unHandledComplaints !== undefined ? "success" : "fail",
        data: unHandledComplaints !== undefined ? unHandledComplaints : "",
        message: unHandledComplaints !== undefined ? "" : "Something went wrong!",
    });
});


//add complaint
const addNewComplaint = asyncHandler(async (req, res) => {
    const { subject, content } = req.body;
    const addedBy = req.user.id;

    const result = await addComplaint(subject, content, addedBy);

    res.status(200).json({
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