import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

function FormSuccess() {
  return (
    <Layout>
      <div className="text-center space-y-6">
        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-emerald-400">Success!</h1>
          <p className="text-gray-300">Your form has been submitted successfully</p>
          <p className="text-gray-400 text-sm">
            We'll review your application and get back to you within 24-48 hours.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-xl border border-emerald-500/20">
            <h3 className="text-emerald-400 font-semibold mb-2">What's Next?</h3>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>• Application review (24-48 hours)</li>
              <li>• Credit verification process</li>
              <li>• Approval notification via email</li>
              <li>• Fund disbursement upon approval</li>
            </ul>
          </div>
          
          <Link 
            to="/" 
            className="inline-block w-full py-3 px-6 bg-gradient-to-r from-emerald-500 to-cyan-500 text-gray-900 font-semibold rounded-xl hover:from-emerald-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
}

export default FormSuccess;