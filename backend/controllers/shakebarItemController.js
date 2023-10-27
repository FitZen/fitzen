import asyncHandler from 'express-async-handler';
import {
    findShakebarItemById,
    findShakebarItemByName,
    allShakebarItems,
    addShakebarItem,
} from "../models/shakebarItemsModal.js";
import generateShakebarItemId from "../utils/generateShakebarItemId.js";


// get all shakebar items 
const getAllShakebarItems = asyncHandler(async (req, res) => {
    const shakebarItems = await allShakebarItems();

    res.status(200).json({
        data: shakebarItems,
    });
});


// add shakebar item
const addNewShakebarItem = asyncHandler(async (req, res) => {
    const { name, category, description, price, image, available_count } = req.body;

    if (await findShakebarItemByName(name)) {
        res.status(409);                            // status code for conflict
        throw new Error("Item already exists.");
    }

    let id;
    do {
        id = generateShakebarItemId();
    } while (await findShakebarItemById(id));

    if (await addShakebarItem(id, name, category, description, price, image, available_count)) {
        res.status(201).json({
            message: "Item added successfully.",
        });
    } else {
        res.status(500);
        throw new Error("Something went wrong!");
    }
});

export {
    getAllShakebarItems,
    addNewShakebarItem,
};