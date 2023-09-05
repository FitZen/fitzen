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
  const {name, description, price, duration, type} = req.body;
  const createdBy = req.user.id;

  const result = await addMembershipPlan(name, description, price, duration, type, createdBy);

  if (! result) {
    res.status(500);
    throw new Error("Something went wrong!");
  }

  res.status(201).json({
    data: result,
    message: "Membership plan added successfully.",
  });
});


export {
  getAllMembershipPlans,
  addNewMembershipPlan,
};
