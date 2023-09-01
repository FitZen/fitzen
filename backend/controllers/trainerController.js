import asyncHandler from 'express-async-handler';
import {
    getViewTrainers,
    
} from "../models/trainerModel.js";


//view all trainers
const getViewAllTrainers = asyncHandler(async (req, res) => {
    const trainers = await getViewTrainers();

    if (trainers === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: trainers,
    });
});

export {
    getViewAllTrainers,
    
};