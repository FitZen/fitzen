import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';


// find user by id
const findUserById = asyncHandler(async (id) => {
    const sql = 'SELECT * FROM users WHERE id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
});


// find user by nic
const findUserByNIC = asyncHandler(async (nic) => {
    const sql = 'SELECT * FROM users WHERE nic = $1;';
    const result = await query(sql, [nic]);

    return result.rows[0];
});


// find user by email
const findUserByEmail = asyncHandler(async (email) => {
    const sql = 'SELECT * FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    return result.rows[0];
});


// find user by contact no
const findUserByContactNo = asyncHandler(async (contactNo) => {
    const sql = 'SELECT * FROM users WHERE contact_no = $1;';
    const result = await query(sql, [contactNo]);

    return result.rows[0];
});


// match passwords
const matchPassword = asyncHandler(async (email, password) => {
    const sql = 'SELECT password FROM users WHERE email = $1';
    const result = await query(sql, [email]);

    return await bcrypt.compare(password, result.rows[0].password);
});


// set login date and time
const setLoginDateTime = asyncHandler(async (id) => {
    const sql = 'UPDATE users SET last_login = NOW() WHERE id = $1 RETURNING id';
    const result = await query(sql, [id]);

    return result.rows[0].id;
});


// set login status
const setLoginStatus = asyncHandler(async (id, status) => {
    const sql = 'UPDATE users SET status = $1 WHERE id = $2 RETURNING id';
    const result = await query(sql, [status, id]);

    return result.rows[0].id;
});


// get user details for top navbar
const getUserDetails = asyncHandler(async (id, type) => {
    let table;

    switch (type) {
        case 'Admin':
            table = 'admin';
            break;
        case 'Receptionist':
            table = 'receptionist';
            break;
        case 'Shake Bar Manager':
            table = 'shakeBarManager';
            break;
        case 'Trainer':
            table = 'trainer';
            break;
        case 'Physiotherapist':
            table = 'physiotherapist';
            break;
        case 'Virtual Member':
            table = 'virtualMember';
            break;
        case 'Physical Member':
            table = 'physicalMember';
            break;
        default:
            throw new Error("Invalid role provided");  // Handle unexpected roles
    }

    const sql = 'SELECT * FROM ' + table + ' WHERE id = $1';
    const result = await query(sql, [id]);

    return result.rows[0];
});


// register user
const registerUser = asyncHandler(async (id, nic, email, hashedPassword, contact_no, type) => {
    const sql = 'INSERT INTO users (id, nic, email, password, contact_no, type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
    const result = await query(sql, [id, nic, email, hashedPassword, contact_no, type]);

    return result.rows[0].id;
});


export {
    findUserById,
    findUserByNIC,
    findUserByEmail,
    findUserByContactNo,
    matchPassword,
    setLoginDateTime,
    setLoginStatus,
    getUserDetails,
};