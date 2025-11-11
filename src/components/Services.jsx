import React from "react";

// Services section component for the landing page
const Services = () => {
  // Array of service data
  const services = [
    {
      title: "Qualified Doctors",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Our experienced and specialized doctors provide top-notch medical care with compassion and expertise.",
      img: "https://plus.unsplash.com/premium_photo-1681843126728-04eab730febe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    },
    {
      title: "Modern Equipment",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae sapien at lacus convallis tincidunt. We use advanced technology and modern machines to ensure accurate diagnosis and effective treatment.",
      img:"https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500" 
    },
    {
      title: "Emergency Services",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Our 24/7 ambulance and emergency unit are always ready to respond promptly.",
      img: "https://images.unsplash.com/photo-1554734867-bf3c00a49371?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGhvc3BpdGFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
      },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mt-2">
          We provide best-in-class health support and care.
        </p>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={service.img}
                // src="zcx" // will Replace with actual image url
                alt={service.title}
                className="w-full h-40 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
