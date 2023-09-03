import { query } from "../config/db.js";
import asyncHandler from "express-async-handler";

const getMembershipPlans = asyncHandler(async () => {
  const sql = "SELECT * FROM membership_plan;";
  const result = await query(sql);
  return result.rows;
});

export { getMembershipPlans };
