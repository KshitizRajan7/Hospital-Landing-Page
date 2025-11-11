"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

// Dummy doctor list
const doctors = [
  "Dr. John Smith",
  "Dr. Jane Doe",
  "Dr. Alex Johnson",
];

export default function UserPage() {
  const router = useRouter();
  const [userName, setUserName] = useState("User");

  // Load appointments from localStorage
  const [appointments, setAppointments] = useState([]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    doctor: "",
    date: "",
    time: "",
    note: "",
  });

  // Load userName and appointments on mount
  useEffect(() => {
    const name = localStorage.getItem("userName");
    if (name) setUserName(name);

    const savedAppointments = localStorage.getItem("appointments");
    if (savedAppointments) setAppointments(JSON.parse(savedAppointments));
  }, []);

  // Update form input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Book appointment
  const handleBookAppointment = (e) => {
    e.preventDefault();

    const newAppointment = {
      ...formData,
      id: Date.now(),
      status: "Pending",
    };

    const updatedAppointments = [...appointments, newAppointment];
    setAppointments(updatedAppointments);

    // Save to localStorage
    localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

    setFormData({ doctor: "", date: "", time: "", note: "" });
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      {/* Greeting */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-green-700 mb-6 text-center"
      >
        Welcome {userName}
      </motion.h1>

      {/* Appointment Section */}
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-4">Your Appointments</h2>
        {appointments.length > 0 ? (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="px-4 py-2">Doctor</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id} className="border-b last:border-b-0 hover:bg-green-50">
                  <td className="px-4 py-2">{appt.doctor}</td>
                  <td className="px-4 py-2">{appt.date}</td>
                  <td className="px-4 py-2">{appt.time}</td>
                  <td className="px-4 py-2">{appt.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">No upcoming appointments.</p>
        )}

        <button
          onClick={() => setModalOpen(true)}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Book New Appointment
        </button>
      </div>

      {/* Contact Info */}
      <div className="max-w-4xl mx-auto bg-white shadow rounded-xl p-6 mb-6">
        <h2 className="text-xl font-semibold text-green-600 mb-4">Contact Hospital</h2>
        <p><strong>Phone:</strong> +977 9876543210</p>
        <p><strong>Email:</strong> hospital@example.com</p>
        <p><strong>Address:</strong> Kathmandu, Nepal</p>
      </div>

      {/* Back Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => router.back()}
          className="px-6 py-3 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.form
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleBookAppointment}
            className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">Book Appointment</h2>
            <div className="flex flex-col gap-3">
              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="border px-3 py-2 rounded"
              >
                <option value="">Select Doctor</option>
                {doctors.map((doc, idx) => (
                  <option key={idx} value={doc}>{doc}</option>
                ))}
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="border px-3 py-2 rounded"
              />
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="border px-3 py-2 rounded"
              />
              <textarea
                name="note"
                value={formData.note}
                onChange={handleChange}
                placeholder="Reason / Note"
                className="border px-3 py-2 rounded"
              />
            </div>

            <div className="flex justify-end mt-4 gap-3">
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Book
              </button>
            </div>
          </motion.form>
        </div>
      )}
    </div>
  );
}
