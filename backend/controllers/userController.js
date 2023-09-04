import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import {
    findUserByEmail,
    matchPassword,
    setLoginDateTime,
    setLoginStatus,
    getUserDetails,
} from "../models/userModel.js";
import sendEmail from "../utils/sendEmail.js";


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
                    data: {
                        id: user.id,
                        type: user.type,
                    },
                });
            } else {
                res.status(500);
                throw new Error("Something went wrong!");
            }
        } else {
            res.status(401);
            throw new Error('Incorrect password');
        }
    } else {
        res.status(404);
        throw new Error('User doesn\'t exist');
    }
});


// desc    logout user
// route   POST /api/users/logout
// access  private (users who only has login/token can access => protected route)
const logoutUser = asyncHandler(async (req, res) => {
    if (await setLoginStatus(req.user.id, 'Inactive')) {
     // if (await setLoginStatus(req.body.userID, 'Inactive')) {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(Date.now()),
        });

        res.status(200).json({
            message: 'User logged out successfully.'},
        );
    } else {
        res.status(500);
        throw new Error("Something went wrong!");
    }
});


// This made for test the protected routes
// desc    get user profile
// route   GET /api/users/profile
// access  private
const getUserAllDetails = asyncHandler(async (req, res) => {

    const user = await getUserDetails(req.user.id, req.user.type);
    // const user = await getUserDetails(req.query.userID, req.query.userType);

    if (! user) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: user,
    });
});


export {
    loginUser,
    logoutUser,
    getUserAllDetails,
}