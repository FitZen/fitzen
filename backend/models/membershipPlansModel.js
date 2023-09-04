import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";


// get all membership plans
const getMembershipPlans = asyncHandler(async () => {
  const sql = "SELECT * FROM membership_plan;";
  const result = await query(sql);
  return result.rows;
});


// add membership plan
const addMembershipPlan = asyncHandler(async () => {
  console.log("addMembershipPlan");
});


export {
  getMembershipPlans,
  addMembershipPlan,
};
