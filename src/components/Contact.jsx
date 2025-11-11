import React from "react";

// Contact section component for the landing page
const Contact = () => {
  return (
    <section className="py-20 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">Contact Us</h2>
        <p className="text-center text-gray-600 mt-2">
          Get in touch with our medical team anytime.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Contact Info */}
          <div className="space-y-4 text-gray-700">
            <p><strong>Phone:</strong> +977 9876543210</p>
            <p><strong>Email:</strong> hospital@example.com</p>
            <p><strong>Address:</strong> Kathmandu, Nepal</p>
            <p>
              Our support team is available 24/7 to assist with health inquiries
              and appointment bookings.
            </p>
          </div>

          {/* Contact Form */}
          <form className="space-y-4 bg-gray-50 p-6 rounded-xl shadow">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border px-4 py-2 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border px-4 py-2 rounded-lg"
            ></textarea>
            <button className="w-full bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 cursor-pointer">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
