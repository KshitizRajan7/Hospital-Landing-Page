"use client";
import React from "react";
import { motion } from "framer-motion";

// UserTable component to display list of users in a table

export default function UserTable({ users, onEdit, onDelete }) { //  users (array), onEdit (function), onDelete (function)
  return (
    <div className="overflow-x-auto bg-blue-50 shadow rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-blue-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Full Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Phone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Role</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Gender</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Address</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Appointment Time</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Assigned Doctor</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-blue-700 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-gray-200">
          {users.map((user) => (
            <motion.tr
              key={user.id}
              className="hover:bg-blue-50"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <td className="px-6 py-4 whitespace-nowrap">{user.fullName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.gender}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.address}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.appointmentTime}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.assignedDoctor}</td>
              <td className="px-6 py-4 whitespace-nowrap text-center flex justify-center gap-2">
                {/* Edit Button */}
                <button
                  onClick={() => onEdit(user)}
                  className="px-3 py-1 bg-yellow-300 text-blue-800 rounded hover:bg-yellow-400 transition"
                >
                  Edit
                </button>
                {/* Delete Button */}
                <button
                  onClick={() => onDelete(user.id)}
                  className="px-3 py-1 bg-red-300 text-blue-800 rounded hover:bg-red-400 transition"
                >
                  Delete
                </button>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
