import asyncHandler from 'express-async-handler';
import {Stripe} from 'stripe';
import {
    existContracts,
    existContractsGetMembers,
    createContract
} from "../models/contractModel.js";
import {
    addNotification
} from "../models/notificationModel.js";

const stripe = new Stripe(process.env.STRIPE_SK);


// get existing contracts
const getExistContracts = asyncHandler(async (req, res) => {
    const memberId = req.params.memberId;
    const contracts = await existContracts(memberId);

    res.status(200).json({
        contracts: contracts,
    });
});


const getExistContractMembers = asyncHandler(async (req, res) => {
    const instructorId = req.query.userID;
    console.log("Hello :",instructorId)

    const contracts = await existContractsGetMembers(instructorId);
    console.log("Hello :",contracts)
    // res.status(200).json({
    //     contracts: contracts,
    // });
});


// checkout trainer package
const checkoutTrainerPackage = asyncHandler(async (req, res) => {
    const {title, sessions, price, trainerID, memberID} = req.body;
    const items = [
        {
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: "FitZen",
                    description: `Trainer Package (${title})`,
                },
                unit_amount: price * 100,      // by default, amount is in cents
            },
            quantity: 1,
        }
    ];

    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/member/instructors`,    // direct when payment is successful
        cancel_url: `${process.env.CLIENT_URL}/payment/failed`,         // direct when payment is cancelled / failed
    });

    if (session.url === undefined) {
        throw new Error("Something went wrong!");
    }

    const memNotifyTitle = "Payment successful"
    const memNotifyContent = `Your payment for the trainer package ${title} offered by trainer ${trainerID} was successful`;
    const trainerNotifyTitle = "New Trainee";
    const trainerNotifyContent = `You have a new trainee ${memberID} for the package ${title} that you offered`;

    await createContract(memberID, trainerID, title, sessions, price)
    await addNotification(memNotifyTitle, memNotifyContent, memberID)
    await addNotification(trainerNotifyTitle, trainerNotifyContent, trainerID)

    res.status(200).json({
        url: session.url,
    });
});


export {
    getExistContracts,
    getExistContractMembers,
    checkoutTrainerPackage
};