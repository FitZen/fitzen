import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import { findUserById } from '../models/userModel.js';


// protect routes by checking the token
const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;

    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const id = decoded.id;
            const type = decoded.type;

            req.user = await findUserById(id);

            next();         // call the next middleware
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
            //res.status(401).json({ message: 'Not authorized, invalid token' });
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
        //res.status(401).json({ message: 'Not authorized, no token' });
    }
});


// authorize protected routes by checking the user type
const permit = (...allowedRoles) => {
    // high order function
    return (req, res, next) => {
        const user = req.user;

        if (user && allowedRoles.includes(user.type)) {
            next();
        } else {
            res.status(403);
            throw new Error('Forbidden');
            //res.status(403).json({message: 'Forbidden'});
        }
    }
}


export {
    protect,
    permit
};