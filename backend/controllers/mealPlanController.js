import asyncHandler from 'express-async-handler';
import {
    getMealPlans,
} from "../models/mealPlanModel.js";


// get meal plans from specific trainer
const getAllMealPlans = asyncHandler(async (req, res) => {
    const mealPlans = await getMealPlans(req.user.id);

    if (mealPlans === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: mealPlans,
    });
});


export {
    getAllMealPlans,
}