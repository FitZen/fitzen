import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';


//get all view members
const getViewMembers = asyncHandler(async () => {
    const sql = 'SELECT first_name, last_name, nic FROM virtualMember UNION SELECT first_name, last_name, nic FROM physicalMember ORDER BY first_name ASC;';
    const result = await query(sql);

    return result.rows;
});


//get all view physical members
const getViewPhysicalMembers = asyncHandler(async () => {
    const sql = 'SELECT * FROM physicalMember ORDER BY joined_on DESC;';
    const result = await query(sql);

    return result.rows;
});


//get all view virtual members
const getViewVirtualMembers = asyncHandler(async () => {
    const sql = 'SELECT * FROM virtualMember ORDER BY joined_on DESC;';
    const result = await query(sql);

    return result.rows;
});


// add new physical member


const addNewPhysicalMember = asyncHandler(async (memberData, addedByUserId) => {
    const { id, nic, first_name, last_name, email, password, contact_no, dob, gender, emergency_contact_no, address,
        membership, height, weight, heart_disease, cardiovascular_condition, dizziness, blood_pressure, gout,
        family_hx_heart_disease, diabetes, infectious_disease, arthritis, fainting, knees, lower_back,
        hips_pelvis, neck_shoulders, surgery_info, medication_info, other_health_notes       
    } = memberData;

    const physicalMemberSql = `
        INSERT INTO physicalMember (
        id, nic, first_name, last_name, email, password, contact_no, dob, gender, emergency_contact_no, address,  membership, added_by
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id `;
    
    const physicalMemberResult = await query(physicalMemberSql, [
        id, nic, first_name, last_name, email, password, contact_no, dob, gender,  emergency_contact_no, address, membership,  addedByUserId
    ]);

    const healthInfoSql = `
        INSERT INTO healthInformation (
            id, height, weight, heart_disease, cardiovascular_condition, dizziness,
            blood_pressure, gout, family_hx_heart_disease, diabetes, infectious_disease,
            arthritis, fainting, knees, lower_back, hips_pelvis, neck_shoulders, surgery_info, medication_info, other_health_notes
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20) RETURNING id`;
    
    const healthInfoResult = await query(healthInfoSql, [
        id, height, weight, heart_disease, cardiovascular_condition,
        dizziness, blood_pressure, gout, family_hx_heart_disease, diabetes, infectious_disease,
        arthritis, fainting, knees, lower_back, hips_pelvis, neck_shoulders, surgery_info, medication_info, other_health_notes
    ]);

    return physicalMemberResult.rows[0].id, healthInfoResult.rows[0].id;
});


export{
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
    addNewPhysicalMember,
};