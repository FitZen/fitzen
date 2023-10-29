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
    const sql = 'SELECT * FROM physicalMember ORDER BY added_on DESC;';
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


// physical member count
const physicalMemberCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Physical Member\' AND (status = \'Active\' OR status = \'Inactive\');';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// active physical member count
const activePhysicalMemberCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Physical Member\' AND status = \'Active\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


//newly added physical member count
const physicalMemberCountToday = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM physicalmember WHERE added_on::date = current_date;';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// virtual member count
const virtualMemberCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Virtual Member\' AND (status = \'Active\' OR status = \'Inactive\');';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});


// active virtual member count
const activeVirtualMemberCount = asyncHandler(async () => {
    const sql = 'SELECT count(id) FROM users WHERE type = \'Virtual Member\' AND status = \'Active\';';
    const result = await query(sql);

    if (result.rows.length > 0) {
        return parseInt(result.rows[0].count, 10);
    } else {
        return 0;
    }
});



export{
    getViewMembers,
    getViewPhysicalMembers,
    getViewVirtualMembers,
    addNewPhysicalMember,
    physicalMemberCount,
    activePhysicalMemberCount,
    virtualMemberCount,
    activeVirtualMemberCount,
    physicalMemberCountToday,
};