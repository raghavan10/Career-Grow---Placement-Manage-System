// components/AboutUs.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 ">
      <Navbar/>

      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6 p-6">About Us</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Career Grow is dedicated to bridging the gap between education and industry by connecting
        students with job opportunities and providing admins the tools to manage the recruitment process
        efficiently. Our platform offers a comprehensive placement management solution tailored to meet
        the needs of colleges and companies alike.
      </p>

      <section className="grid gap-8 md:grid-cols-3 p-10 text-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
          <p className="text-gray-600">
            To empower students with opportunities to build successful careers and to simplify the placement process for institutions and companies.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
          <p className="text-gray-600">
            To become the go-to platform for students, colleges, and companies, ensuring a seamless transition from education to employment.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Values</h3>
          <p className="text-gray-600">
            Integrity, innovation, and inclusivity are the core values driving our mission to connect education and industry.
          </p>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default AboutUs;
