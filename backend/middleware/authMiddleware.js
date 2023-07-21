import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
// do we have to import dotenv here?
import { findUserByNic } from '../models/userModel.js';


const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const nic = decoded.userId;
            req.user = await findUserByNic(nic);
            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});


export default protect;