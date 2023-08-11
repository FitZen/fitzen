import asyncHandler from 'express-async-handler';
import generateToken from "../utils/generateToken.js";
import {
    findUserByEmail,
    matchPassword,
    setLoginDateTime,
    setLoginStatus,
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

            await setLoginDateTime(user.id);
            await setLoginStatus(user.id, 'Active');

            res.status(200).json({
                id: user.id,
                type: user.type
            });
        } else {
            // res.status(401);
            // throw new Error('Incorrect password');
            res.status(401).json({ message: 'Incorrect password' });
        }
    } else {
        res.status(401);
        throw new Error('User doesn\'t exist');
        //res.status(401).json({ message: 'User doesn\'t exist' });
    }
});



// desc    logout user
// route   POST /api/users/logout
// access  private (users who only has login/token can access => protected route)
const logoutUser = asyncHandler(async (req, res) => {
    await setLoginStatus(req.user.id, 'Inactive');

    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    });

    res.status(200).json({message: 'User logged out'});
});


// This made for test the protected routes
// desc    get user profile
// route   GET /api/users/profile
// access  private
const getUserDetails = asyncHandler(async (req, res) => {
    // const user = {
    //     id: req.user.id,
    //     nic: req.user.nic,
    //     email: req.user.email,
    //     contact_no: req.user.contact_no,
    //     type: req.user.type,
    //     status: req.user.status
    // };
    //
    // res.status(200).json(user);

    const {id, first_name, last_name, profile_pic, type} = req.user;

    res.status(200).json({
        id: id,
        first_name: first_name,
        last_name: last_name,
        profile_pic: profile_pic,
        type: type
    });
});


export {
    loginUser,
    logoutUser,
    getUserDetails,
}