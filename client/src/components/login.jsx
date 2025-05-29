import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Logged in with:", { email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-900 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-white">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-gray-400">Email Address</label>
            <input
              type="email"
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-gray-400">Password</label>
            <input
              type="password"
              className="w-full p-3 mt-2 bg-gray-800 text-white rounded-lg border border-gray-700 focus:border-blue-500 focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between text-gray-400 mt-4">
          <Link to="/forgot-password" className="hover:text-white transition duration-300">
            Forgot Password?
          </Link>
          <Link to="/register" className="hover:text-white transition duration-300">
            Create an Account
          </Link>
        </div>
      </div>
    </div>
  );
}
