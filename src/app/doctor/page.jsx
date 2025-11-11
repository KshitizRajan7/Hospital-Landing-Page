"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

//dummy data for patients
const patients = [
  { name: "John Doe", email: "john@example.com", phone: "9876543210", time: "10:00 AM", status: "Checked In" },
  { name: "Jane Smith", email: "jane@example.com", phone: "9845671234", time: "11:30 AM", status: "Pending" },
];

const DoctorPage = () => {
  const router = useRouter();
  const [doctorName, setDoctorName] = useState("Doctor");

  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setDoctorName(name);
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-between items-center mb-6"
      >
        <h1 className="text-3xl font-bold text-blue-600 mb-4 md:mb-0">
          Welcome Dr. {doctorName}
        </h1>
        <motion.button
          onClick={() => router.back()}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Back
        </motion.button>
      </motion.div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <motion.div className="bg-white p-6 rounded-xl shadow" whileHover={{ scale: 1.03 }}>
          <h2 className="text-xl font-semibold text-blue-600">Total Patients</h2>
          <p className="text-gray-700 mt-2">25</p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-xl shadow" whileHover={{ scale: 1.03 }}>
          <h2 className="text-xl font-semibold text-blue-600">Today's Appointments</h2>
          <p className="text-gray-700 mt-2">5</p>
        </motion.div>
        <motion.div className="bg-white p-6 rounded-xl shadow" whileHover={{ scale: 1.03 }}>
          <h2 className="text-xl font-semibold text-blue-600">Pending Reports</h2>
          <p className="text-gray-700 mt-2">2</p>
        </motion.div>
      </div>

      {/* Patient List Table */}
      <div className="overflow-x-auto bg-white rounded-xl shadow p-4">
        <h2 className="text-xl font-bold text-blue-600 mb-4">Assigned Patients</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((p, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b last:border-b-0"
              >
                <td className="px-4 py-2">{p.name}</td>
                <td className="px-4 py-2">{p.email}</td>
                <td className="px-4 py-2">{p.phone}</td>
                <td className="px-4 py-2">{p.time}</td>
                <td className="px-4 py-2">{p.status}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorPage;
