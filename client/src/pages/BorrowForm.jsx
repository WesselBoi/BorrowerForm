import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";

function BorrowForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [ResidenceType, setResidenceType] = useState("");
  const [MonthlyIncome, setMonthlyIncome] = useState("");
  const [PreviousLoan, setPreviousLoan] = useState("");
  const [MaritalStatus, setMaritalStatus] = useState("");
  const [NoOfDependancies, setNoOfDependancies] = useState("");
  const [City, setCity] = useState("");
  const [State, setState] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [LoanPurpose, setLoanPurpose] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;

  async function handleFormSubmit(e) {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !ResidenceType ||
      !MonthlyIncome ||
      !PreviousLoan ||
      !MaritalStatus ||
      !NoOfDependancies ||
      !City ||
      !State ||
      !LoanAmount ||
      !LoanPurpose
    ) {
      setError("All fields are required");
      return;
    }
    setError("");
    setSuccess("");
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/api/submitForm", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          ResidenceType,
          MonthlyIncome,
          PreviousLoan,
          MaritalStatus,
          NoOfDependancies,
          City,
          State,
          LoanAmount,
          LoanPurpose,
        }),
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return;
      }
      setSuccess("Form submitted successfully");
      setTimeout(() => {
        navigate("/formSuccess");
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-900/80 backdrop-blur-sm border-b border-emerald-500/20 px-8 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
              <span className="text-gray-900 font-bold text-lg">B</span>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Borrower Portal
            </div>
          </div>
          <div className="flex space-x-8">
            <Link 
              to="/" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/') 
                  ? 'text-emerald-400 bg-emerald-400/10' 
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
              }`}
            >
              Home
              {isActive('/') && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>}
            </Link>
            <Link 
              to="/about" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/about') 
                  ? 'text-emerald-400 bg-emerald-400/10' 
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
              }`}
            >
              About
              {isActive('/about') && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>}
            </Link>
            <Link 
              to="/borrow" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/borrow') 
                  ? 'text-emerald-400 bg-emerald-400/10' 
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
              }`}
            >
              Borrow
              {isActive('/borrow') && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>}
            </Link>
            {/* <Link 
              to="/login" 
              className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                isActive('/login') 
                  ? 'text-emerald-400 bg-emerald-400/10' 
                  : 'text-gray-300 hover:text-emerald-400 hover:bg-emerald-400/5'
              }`}
            >
              Login
              {isActive('/login') && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400"></div>}
            </Link>
            <Link 
              to="/register" 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${
                isActive('/register') 
                  ? 'text-gray-900 bg-emerald-400' 
                  : 'text-gray-300 border border-emerald-400/50 hover:bg-emerald-400 hover:text-gray-900'
              }`}
            >
              Register
            </Link> */}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-emerald-500/20 p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                Loan Application Form
              </h1>
              <p className="text-gray-300 text-lg">
                Fill in your details to apply for a loan. All information is secure and confidential.
              </p>
            </div>

            <form className="space-y-8" onSubmit={handleFormSubmit}>
              {/* Personal Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-emerald-400 border-b border-emerald-500/30 pb-2">
                  Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Phone Number</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      placeholder="Enter your phone number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Marital Status</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      value={MaritalStatus}
                      onChange={(e) => setMaritalStatus(e.target.value)}
                    >
                      <option value="">Select marital status</option>
                      <option value="Single">Single</option>
                      <option value="Married">Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Widowed">Widowed</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Number of Dependents</label>
                    <input
                      type="number"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      placeholder="Enter number of dependents"
                      value={NoOfDependancies}
                      onChange={(e) => setNoOfDependancies(e.target.value)}
                      min="0"
                    />
                  </div>
                </div>
              </div>

              {/* Address Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-emerald-400 border-b border-emerald-500/30 pb-2">
                  Address Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">City</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      placeholder="Enter your city"
                      value={City}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">State</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      placeholder="Enter your state"
                      value={State}
                      onChange={(e) => setState(e.target.value)}
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-gray-300 mb-2 font-medium">Residence Type</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      value={ResidenceType}
                      onChange={(e) => setResidenceType(e.target.value)}
                    >
                      <option value="">Select residence type</option>
                      <option value="Owned">Owned</option>
                      <option value="Rented">Rented</option>
                      <option value="Parent-owned">Parent-owned</option>
                      <option value="Company-provided">Company-provided</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Financial Information Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-emerald-400 border-b border-emerald-500/30 pb-2">
                  Financial Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Monthly Income</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                        placeholder="Enter monthly income"
                        value={MonthlyIncome}
                        onChange={(e) => setMonthlyIncome(e.target.value)}
                        min="0"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Previous Loan History</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      value={PreviousLoan}
                      onChange={(e) => setPreviousLoan(e.target.value)}
                    >
                      <option value="">Select previous loan status</option>
                      <option value="No previous loans">No previous loans</option>
                      <option value="Previous loan cleared">Previous loan cleared</option>
                      <option value="Current loan active">Current loan active</option>
                      <option value="Previous loan defaulted">Previous loan defaulted</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Loan Details Section */}
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-emerald-400 border-b border-emerald-500/30 pb-2">
                  Loan Requirements
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Loan Amount</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">$</span>
                      <input
                        type="number"
                        className="w-full pl-8 pr-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                        placeholder="Enter loan amount"
                        value={LoanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                        min="0"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2 font-medium">Loan Purpose</label>
                    <select
                      className="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-gray-100 border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400 transition-all duration-300"
                      value={LoanPurpose}
                      onChange={(e) => setLoanPurpose(e.target.value)}
                    >
                      <option value="">Select loan purpose</option>
                      <option value="Home Purchase">Home Purchase</option>
                      <option value="Car Purchase">Car Purchase</option>
                      <option value="Business Expansion">Business Expansion</option>
                      <option value="Education">Education</option>
                      <option value="Medical Expenses">Medical Expenses</option>
                      <option value="Debt Consolidation">Debt Consolidation</option>
                      <option value="Personal Use">Personal Use</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Travel">Travel</option>
                      <option value="Home Renovation">Home Renovation</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-semibold transition-all duration-300 transform hover:scale-105 hover:from-emerald-600 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 disabled:opacity-50 disabled:transform-none"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting Application...</span>
                    </div>
                  ) : (
                    "Submit Loan Application"
                  )}
                </button>
                
                <p className="text-gray-400 text-sm text-center mt-4">
                  By submitting this form, you agree to our{" "}
                  <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">
                    terms and conditions
                  </span>{" "}
                  and{" "}
                  <span className="text-emerald-400 cursor-pointer hover:text-emerald-300">
                    privacy policy
                  </span>
                </p>
              </div>

              {/* Error/Success Messages */}
              {error && (
                <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{error}</span>
                  </div>
                </div>
              )}
              
              {success && (
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{success}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-400 text-sm bg-gray-900/50 border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          &copy; {new Date().getFullYear()} Borrower Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default BorrowForm;