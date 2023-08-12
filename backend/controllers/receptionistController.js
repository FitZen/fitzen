import asyncHandler from 'express-async-handler';
import {
    getReceptionists,
} from "../models/receptionistModel.js";


// get details of all receptionists
const getAllReceptionists = asyncHandler(async (req, res) => {
    // const announcements = await getAnnouncements();
    //
    // if (announcements === undefined) {
    //     res.status(500);
    //     throw new Error("Something went wrong!");
    // }
    //
    // res.status(200).json({
    //     data: announcements,
    // });

    await getReceptionists();
    console.log("getAllReceptionists: controller");
});


export {
    getAllReceptionists,
}