import asyncHandler from "express-async-handler";
import {
  getMembershipPlans,
  addMembershipPlan,
} from "../models/membershipPlansModel.js";


// view all membership plans
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


// add new membership plan
const addNewMembershipPlan = asyncHandler(async (req, res) => {
  console.log("addNewMembershipPlan");
  console.log(await addMembershipPlan());
});

export {
  getAllMembershipPlans,
  addNewMembershipPlan,
};
