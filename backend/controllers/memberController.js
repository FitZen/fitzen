import asyncHandler from 'express-async-handler';
import {
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
    addNewPhysicalMember,
    physicalMemberCount,
    virtualMemberCount,
    activePhysicalMemberCount,
} from "../models/memberModal.js";
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


//get all view members
const getAllViewMembers = asyncHandler(async (req, res) => {
    const members = await getViewMembers();

    if (members === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: members,
    });
});


//get all view physical members
const getAllViewPhysicalMembers = asyncHandler(async (req, res) => {
    const members = await getViewPhysicalMembers();

    if (members === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: members,
    });
});


//get all view virtual members
const getAllViewVirtualMembers = asyncHandler(async (req, res) => {
    const members = await getViewVirtualMembers();

    if (members === undefined) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: members,
    });
});


// add new physical member
const addPhysicalMember = asyncHandler(async (req, res) => {
    const memberData = req.body;
    const {first_name, nic, email, contact_no } = memberData;
    const addedByUserId = req.user.id;

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

    let id;
    do {
        id = generateUserId('Physical Member');
    } while (await findUserById(id));

    const password = generatePassword();

    memberData.id = id;
    memberData.password = password;

    const subject = getSubject();
    const body = getBody(first_name, email, password);

    console.log(memberData);
    console.log(id,password,addedByUserId);

    if(await addNewPhysicalMember(memberData, addedByUserId) && 
    await sendEmail(subject, body, email)) {
        res.status(201).json({
            message: "Member added successfully.",
        });
    } else {
        res.status(500);
        throw new Error("Something went wrong!");
    }
});


// get physical member count
const getPhysicalMemberCount = asyncHandler(async (req, res) => {
    const count = await physicalMemberCount();

    if (! count) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: count,
    });
});


// get virtual member count
const getVirtualMemberCount = asyncHandler(async (req, res) => {
    const count = await virtualMemberCount();

    if (! count) {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: count,
    });
});


// get active physical member count
const getActivePhysicalMemberCount = asyncHandler(async (req, res) => {
    const count = await activePhysicalMemberCount();

    if (count === 'undefined') {
        res.status(500);
        throw new Error("Something went wrong!");
    }

    res.status(200).json({
        data: count,
    });
});


export {
    getAllViewMembers,
    getAllViewPhysicalMembers,
    getAllViewVirtualMembers,
    addPhysicalMember,
    getPhysicalMemberCount,
    getVirtualMemberCount,
    getActivePhysicalMemberCount,
};