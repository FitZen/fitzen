import {query} from '../config/db.js';
import asyncHandler from 'express-async-handler';
import hashPassword from "../utils/hashPassword.js";


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
        membership, has_heart_disease, has_cardiovascular_condition, experiences_dizziness, has_blood_pressure, has_gout,
        has_family_history_heart, has_diabetes, has_infectious_disease, has_arthritis, experiences_fainting, has_knee_issues, has_lower_back_issues,
        has_hips_pelvis_issues, has_neck_shoulder_issues, surgery_info, medication_info, other_health_notes       
    } = memberData;

    // add height and weight to progress table
    // membership eka eka membership table ekn enna one
    const hashedPassword = await hashPassword(password);

    const physicalMemberSql = `
        INSERT INTO physicalMember (
        id, nic, first_name, last_name, email, password, contact_no, dob, gender, emergency_contact_no, address,  membership, added_by
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING id `;
    
    const physicalMemberResult = await query(physicalMemberSql, [
        id, nic, first_name, last_name, email, hashedPassword, contact_no, dob, gender,  emergency_contact_no, address, membership,  addedByUserId
    ]);

    const healthInfoSql = `
        INSERT INTO medicalCondition (
            id, has_heart_disease, has_cardiovascular_condition, experiences_dizziness,
            has_blood_pressure, has_gout, has_family_history_heart, has_diabetes, has_infectious_disease,
            has_arthritis, experiences_fainting, has_knee_issues, has_lower_back_issues, has_hips_pelvis_issues, has_neck_shoulder_issues, surgery_info, medication_info, other_health_notes
        )
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18) RETURNING id`;
    
    const healthInfoResult = await query(healthInfoSql, [
        id, has_heart_disease, has_cardiovascular_condition,
        experiences_dizziness, has_blood_pressure, has_gout, has_family_history_heart, has_diabetes, has_infectious_disease,
        has_arthritis, experiences_fainting, has_knee_issues, has_lower_back_issues, has_hips_pelvis_issues, has_neck_shoulder_issues, surgery_info, medication_info, other_health_notes
    ]);

    return physicalMemberResult.rows[0].id, healthInfoResult.rows[0].id;
});


export{
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
    addNewPhysicalMember,
};