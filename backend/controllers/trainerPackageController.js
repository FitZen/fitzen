import asyncHandler from 'express-async-handler';
import {Stripe} from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SK);


const checkoutTrainerPackage = asyncHandler(async (req, res) => {
    const {title, sessions, price, trainerID, memberID} = req.body;

    // console.log(title, sessions, price, trainerID, memberID);
    //             Silver    15     15000  TR0001     VM0001

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

    const sessionID = session.id;

    if (sessionID) {

    }

    res.status(200).json({
        url: session.url,
    });
});


export {
    checkoutTrainerPackage,
};