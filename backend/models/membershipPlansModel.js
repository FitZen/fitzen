import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";


// get all membership plans
const getMembershipPlans = asyncHandler(async () => {
  const sql = "SELECT * FROM membership_plan ORDER BY id;";
  const result = await query(sql);
  return result.rows;
});


// add membership plan
const addMembershipPlan = asyncHandler(async (name, description, price, duration, type, createdBy) => {
  const sql = 'INSERT INTO membership_plan (name, description, price, duration, type, created_by) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id';
  const result = await query(sql, [name, description, price, duration, type, createdBy]);

  return result.rows[0].id;
});


export {
  getMembershipPlans,
  addMembershipPlan,
};
