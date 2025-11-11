"use client"; //nextjs always tries to run components on Server kinaki this code works in browser so using use client
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UserFormModal from "@/components/UserFormModal";
import UserTable from "@/components/UserTable";
import { users as dummyUsers } from "@/data/users";
import { doctors } from "@/data/doctor";

const AdminDashboard = () => {
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

  // to hold all users
  const [users, setUsers] = useState(dummyUsers);

  // to open/close the modal
  const [modalOpen, setModalOpen] = useState(false);

  // to track if we are editing a user
  const [editUser, setEditUser] = useState(null);

  // Open modal for adding new user
  const handleAdd = () => {
    setEditUser(null); // no user is being edited
    setModalOpen(true);
  };

  // Opens modal for editing existing user
  const handleEdit = (user) => {
    setEditUser(user); // set user to edit
    setModalOpen(true);
  };

  // Deletes a user by id
  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  // Saving user ( new or edited)
  const handleSave = (user) => {
    if (editUser) {
      //  replacing the old user while editing
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      // adding new user with unique id
      setUsers([...users, { ...user, id: Date.now() }]);
    }
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-purple-100 p-6 flex flex-col items-center">
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-blue-700 mb-6 text-center"
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
            <h2 className="text-xl font-semibold text-blue-600">{stat.title}</h2>
            <p className="text-gray-700 mt-2 text-2xl font-bold">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      {/* User Management Section */}
      <div className="w-full max-w-5xl mt-8">
        {/* Adding New User Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleAdd}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Add New User
          </button>
        </div>

        {/* User Table Component */}
        <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

        {/* User Form Modal */}
        {modalOpen && (
          <UserFormModal
            user={editUser}
            doctors={doctors}
            onSave={handleSave}
            onClose={() => setModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
