import asyncHandler from 'express-async-handler';
import {
    getShakeBarItems,
    addShakeBarItem
} from "../models/shakebarItemsModal.js";


// get all shakebar items 
const getAllShakeBarItems = asyncHandler(async (req, res) => {
    const shakebarItems = await getShakeBarItems();

    if (shakebarItems === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: shakebarItems,
    });
});


// add shakebar item
const addNewShakeBarItem = asyncHandler(async (req, res) => {
    const { name, unitPrice, category, description,availble_count} = req.body;
    const added_by = req.user.id;
    const result = await addShakeBarItem(name, unitPrice, category, description, availble_count);

    if (! result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Shakebar item added successfully.",
    });
});

export {
    getAllShakeBarItems,
    addNewShakeBarItem,
};