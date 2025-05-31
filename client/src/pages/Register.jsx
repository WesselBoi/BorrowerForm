import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleUserRegistration(e) {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }
    setError("");
    try {
      setLoading(true);
      const response = await fetch("http://localhost:8001/api/user/register", {
        method: "POST",
        credentials: "include",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      setLoading(false);
      if (!response.ok) {
        setError(data.message || "Something went wrong");
      }
      alert("Registration successful");
      setSuccess("Registration successful");
      navigate("/login");
    } catch (err) {
        setLoading(false);
        setError("An error occurred. Please try again.");
        console.error(err);
    }
  }

return (
    <Layout>
        <h1 className="text-2xl font-bold mb-4 text-indigo-400">Register</h1>
        <form className="space-y-4" onSubmit={handleUserRegistration}>
            <div>
                <label className="block text-gray-300 mb-1">Name</label>
                <input
                    type="text"
                    className="w-full px-3 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    placeholder="Enter your name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
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
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full py-2 rounded bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition"
                disabled={loading}
            >
                {loading ? "Registering..." : "Register"}
            </button>
            {error && <div className="text-red-400">{error}</div>}
            {success && <div className="text-green-400">{success}</div>}
        </form>
    </Layout>
);
}

export default Register;
