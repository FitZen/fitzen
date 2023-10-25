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


// total user count
const totalUserCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) AS count FROM users WHERE status = \'Active\' OR status = \'Inactive\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// active user count
const activeUserCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE status = \'Active\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
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
    totalUserCount,
    activeUserCount,
};