import React from "react";

// Footer component for the landing page
const Footer = () => {
  return (
    <footer className="bg-teal-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center flex-wrap gap-4">
        {/* Copyright */}
        <p className="text-sm">© 2025 HospitalCare. All rights reserved.</p>

        {/* Footer links */}
        <div className="flex gap-4 text-sm">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
