import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import {
    findUserByEmail,
    matchPassword,
    setLoginDateTime,
    setLoginStatus,
    getUserDetails,
} from "../models/userModel.js";


// desc    login user
// route   POST /api/users/login
// access  public
const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);

    if (user) {
        if (await matchPassword(email, password)) {
            generateToken(res, user.id, user.type);

            if (await setLoginStatus(user.id, 'Active') && await setLoginDateTime(user.id)) {
                res.status(200).json({
                    status: "success",
                    data: await findUserByEmail(email),         // to get the latest updated data
                    message: "User logged in successfully.",
                });
            } else {
                res.status(500).json({
                    status: "fail",
                    data: null,
                    message: "Something went wrong!",
                });
            }

        } else {
            res.status(401).json({
                status: "fail",
                data: null,
                message: 'Incorrect password',
            });
        }
    } else {
        res.status(401).json({
            status: "fail",
            data: null,
            message: 'User doesn\'t exist',
        });
    }
});



// desc    logout user
// route   POST /api/users/logout
// access  private (users who only has login/token can access => protected route)
const logoutUser = asyncHandler(async (req, res) => {
    if (await setLoginStatus(req.user.id, 'Inactive')) {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(Date.now()),
        });

        res.status(200).json({
            status: "success",
            data: null,
            message: 'User logged out successfully.'},
        );
    } else {
        res.status(500).json({
            status: "fail",
            data: null,
            message: 'Something went wrong!',
        });
    }
});


// This made for test the protected routes
// desc    get user profile
// route   GET /api/users/profile
// access  private
const getUserAllDetails = asyncHandler(async (req, res) => {
    const user = await getUserDetails(req.user.id, req.user.type);

    res.status(user !== undefined ? 200 : 500).json({
        status: user !== undefined ? "success" : "fail",
        data: user !== undefined ? user : null,
        message: user !== undefined ? "User details fetched successfully." : "Something went wrong!",
    });
});


export {
    loginUser,
    logoutUser,
    getUserAllDetails,
}