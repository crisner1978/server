import Consult from "../models/consultModel.js";
import asyncHandler from "express-async-handler";

export const createConsult = asyncHandler(async (req, res) => {
  const body = req.body;
  const query = req.body.email;
  
  try {
    await Consult.findOneAndUpdate(
      { email: query },
      {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        message: body.message,
      },
      { upsert: true }
    );
    return res.status(200).json({
      message: "Consult Requested",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
    });
  }
});
