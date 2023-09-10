import asyncHandler from 'express-async-handler';
import {
    getViewPhysiotherapists,
    addPhysiotherapist,
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
        data: trainers,
    });
});


//add physiotherapist
const addNewPhysiotherapist = asyncHandler(async (req, res) => {
    // const { nic, first_name, last_name, email, contact_no, address, dob, gender, qualification, mode} = req.body;
    //
    // if (await findUserByNIC(nic)) {
    //     res.status(409);    // status code for conflict
    //     throw new Error("NIC already exists.");
    // }
    //
    // if (await findUserByEmail(email)) {
    //     res.status(409);
    //     throw new Error("Email already exists.");
    // }
    //
    // if (await findUserByContactNo(contact_no)) {
    //     res.status(409);
    //     throw new Error("Contact no already exists.");
    // }
    //
    // const addedBy = req.user.id;
    //
    // let id;
    // do {
    //     id = generateUserId('Trainer');
    // } while (await findUserById(id));
    //
    // const password = generatePassword();
    //
    // const subject = getSubject();
    // const body = getBody(first_name, email, password);
    //
    // if (await addTrainer(id, nic, first_name, last_name, email, password, contact_no, address, dob, gender, qualification, mode, addedBy) &&
    //     await sendEmail(subject, body, email)) {
    //     res.status(201).json({
    //         message: "Trainer added successfully.",
    //     });
    // } else {
    //     res.status(500);
    //     throw new Error("Something went wrong!");
    // }
    console.log("addNewPhysiotherapist controller");
    await addPhysiotherapist();
});


export {
    getViewAllPhysiotherapists,
    addNewPhysiotherapist,
};