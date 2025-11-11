"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SignupPage = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");

 const handleSignup = (e) => {
  e.preventDefault();

  // Store dummy name
  localStorage.setItem("userName", fullName);
  localStorage.setItem("role", role);
  localStorage.setItem("authToken", "dummy_token_123");

  alert(`Account created for ${fullName} as ${role}`);
  router.push("/login");
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-teal-50 text-black">
      <motion.form
        onSubmit={handleSignup}
        className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl font-bold text-teal-400 mb-6 text-center">
          Sign Up
        </h2>

        <label className="block mb-2 text-teal-400">Full Name</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <label className="block mb-2 text-teal-400">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full mb-4 px-4 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
          required
        />

        <label className="block mb-2 text-teal-400">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
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

        <motion.button
          type="submit"
          className="w-full bg-teal-400 text-white py-3 rounded-lg shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Sign Up
        </motion.button>
      </motion.form>
    </div>
  );
};

export default SignupPage;
