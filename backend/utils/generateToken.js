import jwt from 'jsonwebtoken';
// do we have to import dotenv here?

// generate token
const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });

    res.cookie('jwt', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',     // https in production, otherwise http
        sameSite: 'strict',                                 // to prevent CSRF attacks
        maxAge: 30 * 24 * 60 * 60 * 1000                    // 30 days (same as token expiration)
    });
};

export default generateToken;