import asyncHandler from 'express-async-handler';
import {
    getReceptionists
} from '../models/receptionistModel.js';


// get all receptionists
const getAllReceptionists = asyncHandler(async (req, res) => {
    const receptionists = await getReceptionists();
    res.status(200).json(receptionists);
});


export {
    getAllReceptionists,
}