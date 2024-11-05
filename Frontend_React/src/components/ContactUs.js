// components/ContactUs.js
import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6 p-6">Contact Us</h1>
      
      {/* Contact Information */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
        <p className="text-lg text-gray-700">
          We'd love to hear from you! Feel free to reach out with any questions or feedback.
        </p>
        <div className="mt-4 text-gray-600">
          <p>Email: support@careergrow.com</p>
          <p>Phone: +91-9876543210</p>
          <p>Address: 123 College Road, India</p>
        </div>
      </section>

      {/* Google Map Location */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Our Location</h2>
        <div className="flex justify-center">
          <iframe
            title="Career Grow Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835400065138!2d-122.08805408468148!3d37.42199977982132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba021e6b0131%3A0x953cd9347e231643!2sGoogleplex!5e0!3m2!1sen!2sus!4v1615974405790!5m2!1sen!2sus"
            width="600"
            height="400"
            allowFullScreen=""
            loading="lazy"
            className="border rounded-lg shadow-lg"
          ></iframe>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto mb-10 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Send Us a Message</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
