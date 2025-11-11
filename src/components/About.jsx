import React from "react";

// About section component for the landing page
const About = () => {
  return (
    <section className="py-20 bg-gray-50" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image on left */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
            alt="About Us"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

        {/* Text content on right */}
        <div>
          {/* Section title */}
          <h2 className="text-3xl font-bold text-gray-800">About Us</h2>

          {/* Paragraphs with longer Lorem Ipsum */}
          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl
            bibendum, pharetra massa et, tristique leo. Nullam vel ultrices
            tortor. Suspendisse potenti. Donec maximus consequat sem, in
            ullamcorper magna.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our team consists of top specialists, well-trained nurses, and modern emergency response units. We believe in care, trust, and compassion.
          </p>

          {/* button linking to contact section */}
          <a
            href="#contact"
            className="inline-block mt-6 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
