"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

 const handleLogin = (e) => {
  e.preventDefault();

  // Store dummy auth & role
  localStorage.setItem("authToken", "dummy_token_123");
  localStorage.setItem("role", role);

  // Store a dummy name for display
  const dummyName = email.split("@")[0]; // use the email username as dummy name
  localStorage.setItem("userName", dummyName);

  // Redirect based on role
  if (role === "Admin") router.push("/admin");
  else if (role === "Doctor") router.push("/doctor");
  else router.push("/users");
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 text-black">
      <motion.form
        onSubmit={handleLogin}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          Welcome Back
        </h2>

        <label className="block mb-2 text-teal-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full mb-4 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <label className="block mb-2 text-teal-400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full mb-4 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <label className="block mb-2 text-teal-400">Role</label>
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full mb-6 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        >
          <option value="Admin">Admin</option>
          <option value="Doctor">Doctor</option>
          <option value="User">User</option>
        </select>

        <div className="flex gap-4">
          <motion.button
            type="submit"
            className="flex-1 bg-teal-400 text-white py-3 rounded-lg shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
            <Link
              href="/signup"
              className="block w-full bg-teal-100 text-teal-800 py-3 rounded-lg text-center hover:bg-teal-200 transition"
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </motion.form>
    </div>
  );
};

export default LoginPage;
