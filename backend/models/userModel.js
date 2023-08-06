import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';


// find use details by id
const findUserById = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM users WHERE id = $1';
    const result = await query(sql, [id]);

    /*
    if (result.rows.length === 0) {
        throw new Error('No user found with this ID');
    }*/

    return result.rows[0];
});


// find use details by email
const findUserByEmail = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    /*
    if (result.rows.length === 0) {
        throw new Error('No user found with this email');
    }*/

    return result.rows[0];
});


// match passwords
const matchPassword = asyncHandler(async (email, password) => {
    const sql = 'SELECT password FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    /*
    if (result.rows.length === 0) {
        throw new Error('No user found with this email');
    }

    const match = await bcrypt.compare(password, result.rows[0].password);
    if (!match) {
        throw new Error('Password does not match');
    }

    return match; */

    return await bcrypt.compare(password, result.rows[0].password);
});


// set login date and time
const setLoginDateTime = asyncHandler(async (id) => {
    const sql = 'UPDATE users SET last_login = NOW() WHERE id = $1';

    /*const result = await query(sql, [id]);

    if (result.rowCount === 0) {
        throw new Error('No user found with this ID');
    }

    return result.rowCount > 0;*/

    return await query(sql, [id]);
});


// set login status
const setLoginStatus = asyncHandler(async (id, status) => {
    const sql = 'UPDATE users SET status = $1 WHERE id = $2';

    /*
    const result = await query(sql, [status, id]);

    if (result.rowCount === 0) {
        throw new Error('No user found with this ID');
    }

    return result.rowCount > 0;*/

    return await query(sql, [status, id]);
});


// register user
// const registerUsers = asyncHandler(async (nic, name, email, password) => {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);
//
//     const sql = 'INSERT INTO users (nic, name, email, password_hash) VALUES ($1, $2, $3, $4) RETURNING nic, name, email';
//     const result = await query(sql, [nic, name, email, hashedPassword]);
//
//     return result;
// });


export {
    findUserById,
    findUserByEmail,
    matchPassword,
    setLoginDateTime,
    setLoginStatus,
};