"use client"; //nextjs always tries to run components on Server kinaki this code works in browser so using use client
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const router = useRouter(); //using useRouter for navigating between pagess
  const [adminName, setAdminName] = useState("Admin"); //using useState for the data that needs to change

  useEffect(() => {  // Fetching  name from localStorage when component mounts
    const name = localStorage.getItem("userName");
    if (name) setAdminName(name);
  }, []); //using for only once, on mount

  // Dummy stats
  const stats = [
    { title: "Total Users", value: 50 },
    { title: "Total Doctors", value: 10 },
    { title: "Today's Appointments", value: 7 },
    { title: "Pending Reports", value: 3 },
  ];

  return (
    <div className="min-h-screen bg-purple-100 p-6 flex flex-col items-center">
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-purple-700 mb-6 text-center"
      >
        Welcome {adminName} (Admin Dashboard)
      </motion.h1>

      {/* Stats Stacks  */}
      <div className="grid md:grid-cols-2 gap-6 mb-8 w-full max-w-4xl">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 rounded-xl shadow text-center"
            whileHover={{ scale: 1.03 }}
          >
            <h2 className="text-xl font-semibold text-purple-600">{stat.title}</h2>
            <p className="text-gray-700 mt-2 text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Managing Users Button */}
      <motion.button
        onClick={() => router.push("/admin/adminUserList")}
        className="px-8 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Manage Users
      </motion.button>
    </div>
  );
};

export default AdminDashboard;
