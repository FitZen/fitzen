import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import {
    isUserExists,
    registerUsers,
    authUser,
} from "../models/userModel.js";


// desc    Login user
// route   POST /api/users/login
// access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await authUser(email, password);

    if (user) {
        generateToken(res, user.nic);
        res.status(201).json({
            nic: user.nic,
            name: user.name,
            email: user.email
        });
    }else {
        res.status(400);
        throw new Error('Invalid email or password');
    }
});


// desc    Logout user
// route   POST /api/users/logout
// access  Private (users who only has token/login can access)
const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(Date.now())
    });

    res.status(200).json({message: 'User logged out'});
});


// desc    Register new user
// route   POST /api/users/register
// access  Public (because anyone can access without token)
const registerUser = asyncHandler(async (req, res) => {
    const { nic, name, email, password } = req.body;

    const isExist = await isUserExists(email);

    if (isExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user = await registerUsers(nic, name, email, password);

    if (user.rowCount > 0) {
        // do we have to generate token here?
        res.status(201).json({
            nic: user.rows[0].nic,
            name: user.rows[0].name,
            email: user.rows[0].email
        });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});


// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    console.log(req.user);

    res.status(200).json({message: 'Get user profile'});
});


// desc    Update user profile
// route   PUT /api/users/profile
// access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    console.log(req.user);

    res. status(200).json({message: 'Update user profile'});
});


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};