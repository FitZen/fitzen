import asyncHandler from 'express-async-handler';
import {
    getReceptionists
} from '../models/receptionistModel.js';
import generateId from "../utils/generateId.js";


// get all receptionists
const getAllReceptionists = asyncHandler(async (req, res) => {
    const receptionists = await getReceptionists();
    res.status(200).json(receptionists);
});


// add receptionist
const addReceptionist = asyncHandler(async (req, res) => {
    res.status(200).json(req.body);
    console.log(generateId('Receptionist'));
});


export {
    getAllReceptionists,
    addReceptionist,
}