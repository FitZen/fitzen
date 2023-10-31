import asyncHandler from 'express-async-handler';
import {
    getViewPhysiotherapists,
    addPhysiotherapist,
    physiotherapistCount,
    activePhysiotherapistCount,
    physiotherapistCountToday,
} from "../models/physiotherapistModel.js";
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


//view all trainers
const getViewAllPhysiotherapists = asyncHandler(async (req, res) => {
    const trainers = await getViewPhysiotherapists();

    if (trainers === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: physiotherapists,
    });
});


//add physiotherapist
const addNewPhysiotherapist = asyncHandler(async (req, res) => {
    const { nic, first_name, last_name, email, contact_no, address, dob, gender, qualification } = req.body;
   
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

    // const added_by = req.user.id;
    const added_by = req.body.userID;
    
    let id;
    do {
        id = generateUserId('Physiotherapist');
    } while (await findUserById(id));

    const password = generatePassword();

    const subject = getSubject();
    const body = getBody(first_name, email, password);

    if (await addPhysiotherapist(id, nic, first_name, last_name, email, password, contact_no, address, dob, gender, qualification, added_by) &&
        await sendEmail(subject, body, email)) {
        res.status(201).json({
            message: "Physiotherapist added successfully.",
        });
    } else {
        res.status(500);
        throw new Error("Something went wrong!");
    }
});


// get physiotherapist count
const getPhysiotherapistCount = asyncHandler(async (req, res) => {
    const count = await physiotherapistCount();

    res.status(200).json({
        data: count,
    });
});


// get active physiotherapist count
const getActivePhysiotherapistCount = asyncHandler(async (req, res) => {
    const count = await activePhysiotherapistCount();

    res.status(200).json({
        data: count,
    });
});


// get newly added physiotherapist count
const getPhysiotherapistCountToday = asyncHandler(async (req, res) => {
    const count = await physiotherapistCountToday();

    res.status(200).json({
        data: count,
    });
});


export {
    getViewAllPhysiotherapists,
    addNewPhysiotherapist,
    getPhysiotherapistCount,
    getActivePhysiotherapistCount,
    getPhysiotherapistCountToday,
};