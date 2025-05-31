import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Layout>
      <div className="text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
            Welcome to Borrower Portal
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Your trusted partner for seamless loan applications and financial solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
            <h3 className="text-emerald-400 font-semibold mb-2">🚀 Quick Applications</h3>
            <p className="text-gray-400 text-sm">Apply for loans in minutes with our streamlined process</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
            <h3 className="text-emerald-400 font-semibold mb-2">📊 Real-time Tracking</h3>
            <p className="text-gray-400 text-sm">Monitor your application status and get instant updates</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
            <h3 className="text-emerald-400 font-semibold mb-2">🔒 Secure & Safe</h3>
            <p className="text-gray-400 text-sm">Your data is protected with bank-level security</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link 
            to="/borrow" 
            className="flex-1 py-3 px-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Apply for Loan
          </Link>
          <Link 
            to="/about" 
            className="flex-1 py-3 px-6 border border-emerald-500/50 text-emerald-400 font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300"
          >
            Learn More
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default Home;