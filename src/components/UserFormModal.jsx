"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function UserFormModal({ user, doctors, onSave, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    role: "User",
    gender: "Male",
    address: "",
    appointmentTime: "",
    assignedDoctor: "",
  });

  // Loading data if editing a user
  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      {/* Motion modal */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3 }}
        className="bg-blue-50 p-6 rounded-xl shadow-xl w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-blue-700 mb-4">
          {user ? "Edit User" : "Add User"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option>User</option>
            <option>Doctor</option>
            <option>Admin</option>
          </select>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <input
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="appointmentTime"
            value={formData.appointmentTime}
            onChange={handleChange}
            type="datetime-local"
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <select
            name="assignedDoctor"
            value={formData.assignedDoctor}
            onChange={handleChange}
            className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.name}>{doc.name}</option>
            ))}
          </select>
        </div>

        <div className="flex justify-end mt-6 gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Save
          </button>
        </div>
      </motion.form>
    </div>
  );
}
