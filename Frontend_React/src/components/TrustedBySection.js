import React from 'react';

const TrustedBySection = () => {
  const clients = [
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/abof.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/123.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/1234.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/client-4.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/client-5.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/client-6.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/client-7.png",
    "https://drapcode-static.s3.amazonaws.com/pre-built-sections/services/services002/bt.png",
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-12">
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Trusted and Loved By</h2>
          <div className="border-b-2 border-gray-300 w-16 mx-auto my-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Career Grow is trusted by top institutions, companies, and thousands of users who rely on us for their career growth. Join a community that values our commitment to connecting talent with opportunity.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4 md:px-8 lg:px-16">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-white shadow-md rounded-md">
              <img
                src={client}
                alt={`Client ${index + 1}`}
                className="max-h-16 sm:max-h-20 md:max-h-24 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
