import asyncHandler from 'express-async-handler';
import {
    instructorRatings,
} from "../models/ratingsModel.js";


// get instructor ratings
const getInstructorRatings = asyncHandler(async (req, res) => {
    const instructorId = req.params.instructorId;
    const ratings = await instructorRatings(instructorId);

    res.status(200).json({
        data: ratings,
    });
});


export {
    getInstructorRatings,
};