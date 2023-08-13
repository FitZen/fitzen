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
    // const { subject, content } = req.body;
    // const addedBy = req.user.id;
    //
    // const result = await addComplaint(subject, content, addedBy);
    //
    // if (! result) {
    //     res.status(500);
    //     throw new Error("Something went wrong!");
    // }
    //
    // res.status(201).json({
    //     data: result,
    //     message: "Complaint added successfully.",
    // });

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

    const addedBy = req.user.id;

    let id;
    do {
        id = generateUserId('Receptionist');
    } while (await findUserById(id));

    const password = generatePassword();

    console.log(addedBy);
    console.log(id);
    console.log(password);
});


export {
    getAllReceptionists,
    addNewReceptionist,
}