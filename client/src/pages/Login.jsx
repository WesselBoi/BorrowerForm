import React, { useState } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleUserLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    setSuccess("");
    
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/api/user/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      
      const data = await response.json();
      setLoading(false);
      
      if (!response.ok) {
        setError(data.message || "Something went wrong");
        return; // Important: Return early on error
      }
      
      // Success case
      setSuccess("Login successful");
      setTimeout(() => {
        navigate("/");
      }, 1000);
      
    } catch (err) {
      setLoading(false);
      setError("An error occurred. Please try again.");
      console.error(err);
    }
  }

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4 text-indigo-400">Login</h1>
      <form className="space-y-4" onSubmit={handleUserLogin}>
        <div>
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        {error && <div className="text-red-400 text-sm">{error}</div>}
        {success && <div className="text-green-400 text-sm">{success}</div>}
      </form>
    </Layout>
  );
}

export default Login;