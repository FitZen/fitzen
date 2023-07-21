import { query } from '../config/db.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';


// find user is exists
const isUserExists = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    return result.rowCount > 0;
});


// find user by email
const findUserByEmail = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    return result.rows[0];
});


// find user by nic
const findUserByNic = asyncHandler(async (nic) => {
    const sql = 'SELECT * FROM users WHERE nic = $1';
    const result = await query(sql, [nic]);

    return result.rows[0];
});


// authenticate user
const authUser = asyncHandler(async (email, password) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    if (result.rowCount > 0) {
        const user = result.rows[0];
        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (isMatch) {
            return user;
        } else {
            return false;
        }
    } else {
        return false;
    }
});


// register user
const registerUsers = asyncHandler(async (nic, name, email, password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const sql = 'INSERT INTO users (nic, name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING nic, name, email';
    const result = await query(sql, [nic, name, email, hashedPassword]);

    return result;
});


export {
    isUserExists,
    registerUsers,
    authUser,
    findUserByEmail,
    findUserByNic,
};