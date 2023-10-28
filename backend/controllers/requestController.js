import asyncHandler from 'express-async-handler';
import {
    allRequests,
} from "../models/requestModel.js";


// get all requests for a trainer
const getRequests = asyncHandler(async (req, res) => {
    const trainerId = req.params.trainerId;
    const requests = await allRequests(trainerId);

    res.status(200).json({
        data: requests
    });
});


export {
    getRequests,
}