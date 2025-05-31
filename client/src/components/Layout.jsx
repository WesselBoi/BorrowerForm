import React from "react";
import { Link, useLocation } from "react-router-dom";

function Layout({ children }) {
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-gray-100">
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
      
      <main className="flex-1 flex items-center justify-center min-h-[calc(100vh-140px)] py-8">
        <div className="w-full max-w-lg p-8 bg-gray-800/60 backdrop-blur-sm rounded-2xl shadow-2xl border border-emerald-500/20">
          {children}
        </div>
      </main>
      
      <footer className="text-center py-6 text-gray-400 text-sm bg-gray-900/50 border-t border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          &copy; {new Date().getFullYear()} Borrower Portal. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Layout;