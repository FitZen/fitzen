import asyncHandler from 'express-async-handler';
import {
    getMealPlans,
} from "../models/mealPlanModel.js";


// get meal plans from specific trainer
const getAllMealPlans = asyncHandler(async (req, res) => {
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

    await getMealPlans();
    console.log("getMealPlans: controller");
});


export {
    getAllMealPlans,
}