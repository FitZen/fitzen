import asyncHandler from 'express-async-handler';
import {
    getViewPhysiotherapists,
    
} from "../models/physiotherapistModel.js";


//view all trainers
const getViewAllPhysiotherapists = asyncHandler(async (req, res) => {
    const trainers = await getViewPhysiotherapists();

    if (trainers === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: trainers,
    });
});

export {
    getViewAllPhysiotherapists,
    
};