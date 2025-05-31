const mongoose = require('mongoose');

const borrowFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    ResidenceType: {
        type: String,
        required: true
    },
    MonthlyIncome: {
        type: Number,
        required: true
    },
    PreviousLoan: {
        type: String,
        required: true
    },
    MaritalStatus: {
        type: String,
        required: true
    },
    NoOfDependancies: {
        type: Number,
        required: true
    },
    City: {
        type: String,
        required: true
    },
    State: {
        type: String,
        required: true
    },
    LoanAmount: {
        type: Number,
        required: true
    },
    LoanPurpose: {
        type: String,
        required: true
    },
})

const BorrowForm = mongoose.model("BorrowForm" , borrowFormSchema);

module.exports = BorrowForm;