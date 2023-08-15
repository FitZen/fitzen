import asyncHandler from 'express-async-handler';
import {
    getMealPlans,
    addMealPlan,
} from "../models/mealPlanModel.js";
import {addComplaint} from "../models/complaintModel.js";


// get meal plans from specific trainer
const getAllMealPlans = asyncHandler(async (req, res) => {
    //const mealPlans = await getMealPlans(req.user.id);
    console.log("userID from be:", req.query.userID)
    const mealPlans = await getMealPlans(req.query.userID);

    //console.log("mealPlans from be:", mealPlans)

    if (mealPlans === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: mealPlans,
    });
});


// add new meal plan
const addNewMealPlan = asyncHandler(async (req, res) => {
    const { name, breakfast, lunch, dinner, pre_workout, post_workout, note } = req.body;
    const createdBy = req.user.id;

    const result = await addMealPlan(name, breakfast, lunch, dinner, pre_workout, post_workout, note, createdBy);

    if (! result) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(201).json({
        data: result,
        message: "Meal plan added successfully.",
    });
});


export {
    getAllMealPlans,
    addNewMealPlan,
}