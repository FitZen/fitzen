import asyncHandler from 'express-async-handler';
import {
    testPaymentModel
} from "../models/checkoutMode.js";

import { Stripe } from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SK);


// test payment controller (create checkout session)
const testPaymentController = asyncHandler(async (req, res) => {
    // const items = req.body.cartItems.map(item => {
    //     return {
    //         price_data: {
    //             currency: 'lkr',
    //             product_data: {
    //                 name: item.name,
    //                 image: [item.image],
    //             },
    //             unit_amount: item.price * 100,      // by default, amount is in cents
    //         },
    //         quantity: item.qty,
    //     };
    // });


    const items = [
        {
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: 'T-shirt - Black',
                },
                unit_amount: 10000,      // by default, amount is in cents
            },
            quantity: 3,
        },
        {
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: 'T-shirt - Red',
                },
                unit_amount: 20000,      // by default, amount is in cents
            },
            quantity: 2,
        },
    ];

    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/payment/success`,   // direct when payment is successful
        cancel_url: `${process.env.CLIENT_URL}/payment/failed`,     // direct when payment is cancelled / failed
    });

    res.status(200).json({
        url: session.url,
    });
});


// checkout shakebar order
const checkoutShakebarOrder = asyncHandler(async (req, res) => {
    const items = req.body.cartItems.map(item => {
        return {
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: item.name,
                    image: [item.image],
                },
                unit_amount: item.price * 100,      // by default, amount is in cents
            },
            quantity: item.qty,
        };
    });

    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/payment/success`,   // direct when payment is successful
        cancel_url: `${process.env.CLIENT_URL}/payment/failed`,     // direct when payment is cancelled / failed
    });

    res.status(200).json({
        url: session.url,
    });
});


export {
    testPaymentController,
    checkoutShakebarOrder,
};