// src/components/Footer.js
import React from 'react';
import logo from './assets/logo.jpg'; // Adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {/* About Us Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Career Grow Logo" className="h-10 w-10 rounded-full" />
            <h3 className="text-2xl font-semibold">Career Grow</h3>
          </div>
          <p className="text-sm text-gray-300">
            Career Grow is a Placement Management System that connects students with top-tier opportunities and provides
            powerful tools for admins to efficiently manage the recruitment process.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className='pl-10'>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:underline text-gray-400">Home</a></li>
            <li><a href="/about" className="hover:underline text-gray-400">About Us</a></li>
            <li><a href="/contact" className="hover:underline text-gray-400">Contact Us</a></li>
            <li><a href="/privacy" className="hover:underline text-gray-400">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p>Email: support@placement.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Address: 123 College Road, India</p>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-400">
        <p>© 2024 Career Grow. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
