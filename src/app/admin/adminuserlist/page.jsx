"use client";
import React, { useState } from "react";
import UserFormModal from "@/components/UserFormModal";
import UserTable from "@/components/UserTable";
import { users as dummyUsers } from "@/data/users";
import { doctors } from "@/data/doctor";

const AdminUserPage = () => {
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
    <div className="min-h-screen p-6 bg-blue-50 text-gray-800">
      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        User Management
      </h1>

      {/* Adding New User Button */}
      <div className="flex justify-center mb-4">
        <button
          onClick={handleAdd}
          className="px-6 py-2 bg-blue-400 text-white rounded-lg shadow hover:bg-blue-500 transition"
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
  );
};

export default AdminUserPage;
