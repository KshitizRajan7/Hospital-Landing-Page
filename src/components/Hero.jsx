import React from "react";

// Hero section component for the landin page
// have a heading, description, call-to-action button, and an image
const Hero = () => {
  return (
    <section className="bg-gray-50 py-20" id="hero">
      {/* Container for content with responsive grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <div>
          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Everything else is urgent until you get sick.
          </h1>

          {/*  description */}
          <p className="mt-4 text-gray-600 text-lg">
            We provide world-class medical services with highly experienced
            doctors, modern equipment, and 24/7 emergency support.
          </p>

          {/* button linking to services section */}
          <a
            href="#services"
            className="mt-6 inline-block px-6 py-3 bg-teal-400 text-white font-medium rounded-lg shadow hover:bg-teal-700 transition"
          >
            View Services
          </a>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-center">
          <img
            src="https://plus.unsplash.com/premium_photo-1681843129112-f7d11a2f17e3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500" // Replace "zxc" with your actual image path or import
            alt="Hospital"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
