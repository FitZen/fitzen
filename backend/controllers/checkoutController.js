import asyncHandler from 'express-async-handler';
import {
    shakebarOrder,
    addShakebarOrder,
    addShakebarOrderItems,
} from "../models/shakebarOrderModel.js";
import { Stripe } from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SK);
import generateShakebarOrderId from "../utils/generateShakebarOrderId.js";


// checkout shakebar order
const checkoutShakebarOrder = asyncHandler(async (req, res) => {
    const { userID, totalAmount } = req.body;
    const items = req.body.cartItems.map(item => {
        return {
            price_data: {
                currency: 'lkr',
                product_data: {
                    name: item.name,
                    //image: ["http://localhost:3000/Shakebar/item.jpg"],
                },
                unit_amount: item.price * 100,      // by default, amount is in cents
            },
            quantity: item.quantity,
        };
    });

    let orderId;
    do {
        orderId = generateShakebarOrderId();
    } while (await shakebarOrder(orderId));

    const mappedItems = req.body.cartItems.map(item => {
        return {
            id: item.id,
            price: item.price,
            qty: item.quantity,
            amount: item.price * item.quantity,
        };
    });

    const session = await stripe.checkout.sessions.create({
        line_items: items,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/member/shakebar`,   // direct when payment is successful
        cancel_url: `${process.env.CLIENT_URL}/payment/failed`,     // direct when payment is cancelled / failed
    });

    await addShakebarOrder(orderId, totalAmount, userID);

    for (let i = 0; i < mappedItems.length; i++) {
        await addShakebarOrderItems(mappedItems[i], orderId);
    }

    res.status(200).json({
        url: session.url,
    });
});


export {
    checkoutShakebarOrder,
};