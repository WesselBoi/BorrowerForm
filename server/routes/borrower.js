const express = require("express");
const BorrowForm = require("../models/borrowForm");

const router = express.Router();

router.post("/", async (req, res) => {
  const body = req.body;
  if (
    !body.name ||
    !body.email ||
    !body.phone ||
    !body.ResidenceType ||
    !body.MonthlyIncome ||
    !body.PreviousLoan ||
    !body.MaritalStatus ||
    !body.NoOfDependancies ||
    !body.City ||
    !body.State ||
    !body.LoanAmount ||
    !body.LoanPurpose
  ) {
    return res.status(400).json({
      success: false,
      message: "Please enter all fields",
    });
  }
  try {
    const form = await BorrowForm.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      ResidenceType: body.ResidenceType,
      MonthlyIncome: body.MonthlyIncome,
      PreviousLoan: body.PreviousLoan,
      MaritalStatus: body.MaritalStatus,
      NoOfDependancies: body.NoOfDependancies,
      City: body.City,
      State: body.State,
      LoanAmount: body.LoanAmount,
      LoanPurpose: body.LoanPurpose
    });
    res
      .status(201)
      .json({ success: true, message: "Form submitted successfully", form });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

module.exports = router;
