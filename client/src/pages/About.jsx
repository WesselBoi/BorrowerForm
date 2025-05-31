import React from "react";
import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent text-center">
          About Borrower Portal
        </h1>
        
        <div className="space-y-4">
          <p className="text-gray-300 leading-relaxed">
            Borrower Portal is a cutting-edge financial platform designed to revolutionize the loan application process. 
            We believe in making financial services accessible, transparent, and user-friendly for everyone.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-emerald-400">Why Choose Us?</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-400">Secure and user-friendly interface with modern design</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-400">Real-time tracking of your loan applications and status updates</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-400">24/7 dedicated support team for all your queries and concerns</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-400">Competitive rates and flexible repayment options</p>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20 mt-6">
            <h3 className="text-emerald-400 font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-400 text-sm">
              To democratize access to financial services by providing a seamless, transparent, 
              and efficient platform that empowers individuals to achieve their financial goals.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;