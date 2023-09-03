import asyncHandler from "express-async-handler";
import { getMembershipPlans } from "../models/membershipPlansModel.js";

const getAllMembershipPlans = asyncHandler(async (req, res) => {
  const membershipPlans = await getMembershipPlans();

  if (membershipPlans === undefined) {
    res.status(500);
    throw new Error("Something went wrong!");
  }

  res.status(200).json({
    data: membershipPlans,
  });
});

export { getAllMembershipPlans };
