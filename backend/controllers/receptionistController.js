import asyncHandler from 'express-async-handler';
import {
    getReceptionists,
    addReceptionist,
} from "../models/receptionistModel.js";
import {
    findUserById,
    findUserByNIC,
    findUserByEmail,
    findUserByContactNo,
} from "../models/userModel.js";
import generateUserId from "../utils/generateUserId.js";
import generatePassword from "../utils/generatePassword.js";
import sendEmail from "../utils/sendEmail.js";
import { getSubject, getBody } from "../utils/EmpRegMailTemplate.js";


// get details of all receptionists
const getAllReceptionists = asyncHandler(async (req, res) => {
    const receptionists = await getReceptionists();

    if (receptionists === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: receptionists,
    });
});


//add receptionist
const addNewReceptionist = asyncHandler(async (req, res) => {
    const { nic, first_name, last_name, email, contact_no} = req.body;

    if (await findUserByNIC(nic)) {
        res.status(409);    // status code for conflict
        throw new Error("NIC already exists.");
    }

    if (await findUserByEmail(email)) {
        res.status(409);
        throw new Error("Email already exists.");
    }

    if (await findUserByContactNo(contact_no)) {
        res.status(409);
        throw new Error("Contact no already exists.");
    }

    const addedBy = req.body.userID;

    let id;
    do {
        id = generateUserId('Receptionist');
    } while (await findUserById(id));

    const password = generatePassword();

    const subject = getSubject();
    const body = getBody(first_name, email, password);

    if (await addReceptionist(id, nic, first_name, last_name, email, password, contact_no, addedBy) &&
        await sendEmail(subject, body, email)) {
        res.status(201).json({
            message: "Receptionist added successfully.",
        });
    } else {
        res.status(500);
        throw new Error("Something went wrong!");
    }
});


export {
    getAllReceptionists,
    addNewReceptionist,
}