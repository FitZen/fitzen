import jwt from 'jsonwebtoken';


// generate token
const generateToken = (res, id, type) => {
    const token = jwt.sign({ id, type }, process.env.JWT_SECRET, {
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