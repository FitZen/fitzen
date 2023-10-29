import asyncHandler from 'express-async-handler';
import {
    allRequests,
    isHavingPendingRequest,
    addRequest,
    updateRequestStatus,
} from "../models/requestModel.js";


// get all requests for a trainer
const getRequests = asyncHandler(async (req, res) => {
    const trainerId = req.params.trainerId;
    const requests = await allRequests(trainerId);

    res.status(200).json({
        data: requests
    });
});


// add new request
const addNewRequest = asyncHandler(async (req, res) => {
    const { member_id, trainer_id, package_type } = req.body;

    if (await isHavingPendingRequest(member_id)) {
        res.status(409);
        throw new Error('Member already has a pending request');
    }

    const requestId = await addRequest(member_id, trainer_id, package_type);

    if (requestId) {
        res.status(201).json({
            data: requestId,
        });
    } else {
        res.status(500);
        throw new Error("Something went wrong!");
    }
});


// update pending request status
const updatePendingRequestStatus = asyncHandler(async (req, res) => {
    const { request_id, status } = req.body;
    const updatedRequestId = await updateRequestStatus(request_id, status);

    res.status(200).json({
        data: updatedRequestId
    });
});


export {
    getRequests,
    addNewRequest,
    updatePendingRequestStatus,
}