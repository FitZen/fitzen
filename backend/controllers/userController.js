import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import {
    findUserByEmail,
    matchPassword,
    setLoginDateTime,
    setLoginStatus,
} from "../models/userModel.js";


// desc    Login user
// route   POST /api/users/login
// access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (user) {
        if (await matchPassword(email, password)) {
            generateToken(res, user.id, user.type);

            await setLoginDateTime(user.id);
            await setLoginStatus(user.id, 'Active');

            res.status(201).json({
                id: user.id,
                type: user.type
            });
        } else {
            res.status(400);
            throw new Error('Incorrect password');
        }
    } else {
        res.status(400);
        throw new Error('User doesn\'t exist');
    }
});



// desc    Logout user
// route   POST /api/users/logout
// access  Private (users who only has token/login can access => protected route)
const logoutUser = asyncHandler(async (req, res) => {
    await setLoginStatus(req.user.id, 'Inactive');

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(200).json({message: 'User logged out'});
});


// This made for test the protected routes

// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        id: req.user.id,
        nic: req.user.nic,
        email: req.user.email,
        contact_no: req.user.contact_no,
        type: req.user.type,
        status: req.user.status
    };

    res.status(200).json(user);
});


export {
    loginUser,
    logoutUser,
    getUserProfile,
}