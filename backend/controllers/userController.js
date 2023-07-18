import asyncHandler from 'express-async-handler';
// import generateToken from generateToken.js
// import user model here from userModels.js


// desc    Register new user
// route   POST /api/users/register
// access  Public (because anyone can access without token)
const registerUser = asyncHandler(async (req, res) => {
    const { nic, name, email, password } = req.body;

    // check if user already exists

    // if user not exists, create new user

    // check if user created successfully
    // generate token

    res.status(200).json({message: 'Register user'});
});


// desc    Login user
// route   POST /api/users/login
// access  Public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // check if user exists by email

    // authenticate user
    // generate token

    res.status(200).json({message: 'Login user'});
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


// desc    Get user profile
// route   GET /api/users/profile
// access  Private
const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get user profile'});
});


// desc    Update user profile
// route   PUT /api/users/profile
// access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res. status(200).json({message: 'Update user profile'});
});


export {
    registerUser,
    loginUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};