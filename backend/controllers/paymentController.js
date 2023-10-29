import asyncHandler from 'express-async-handler';
import {
    testPaymentModel
} from "../models/paymentMode.js";


// test payment controller
const testPaymentController = asyncHandler(async (req, res) => {
    // const instructorId = req.query.userID;
    // const ratings = await instructorRatings(instructorId);
    //
    // res.status(200).json({
    //     data: ratings,
    // });

    await testPaymentModel();
    console.log('test payment controller');
});


export {
    testPaymentController,
};