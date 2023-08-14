import asyncHandler from 'express-async-handler';
import {
    getMealPlans,
    addMealPlan,
} from "../models/mealPlanModel.js";
import {addComplaint} from "../models/complaintModel.js";


// get meal plans from specific trainer
const getAllMealPlans = asyncHandler(async (req, res) => {
    console.log("user from backend : ", req.query.userID);
    const created_by = req.query.userID;

    const mealPlans = await getMealPlans(created_by);
    console.log("mealPlans from backend : ", mealPlans); // Corrected this line

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