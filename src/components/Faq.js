// components/FAQ.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';

const FAQ = () => {
  const navigate = useNavigate();
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Career Grow, and who is it for?",
      answer: "Career Grow is a platform designed to enhance communication and management between colleges and companies for seamless placement coordination. It is exclusively for college and company administrators to manage permissions and operations efficiently.",
    },
    {
      question: "How does Career Grow facilitate college and company interactions?",
      answer: "Career Grow allows colleges and companies to communicate directly, with the college and company admins managing permissions for various operations such as viewing and updating placement information.",
    },
    {
      question: "What role do admins play on Career Grow?",
      answer: "Admins on both the college and company sides have complete control over approving or rejecting requests, managing data, and overseeing placement operations. Admins ensure secure and authorized interactions on the platform.",
    },
    {
      question: "Can students access or interact with Career Grow?",
      answer: "No, Career Grow is designed solely for college and company admins to manage placements. Students do not have any access or involvement in the platform.",
    },
    {
      question: "What types of permissions can admins manage in Career Grow?",
      answer: "Admins can manage permissions for actions such as viewing, adding, or updating placement-related information. They control which operations colleges and companies can perform on the platform.",
    },
    {
      question: "Is Career Grow suitable for tracking placement statistics?",
      answer: "Yes, Career Grow provides tools for colleges and companies to monitor and manage placement data, facilitating efficient tracking of placement statistics and related activities.",
    },
    {
      question: "How secure is data management on Career Grow?",
      answer: "Career Grow ensures secure data management through admin-controlled permissions, so only authorized individuals can perform operations, keeping all placement data safe and confidential.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar/>

      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-6 p-6">Frequently Asked Questions</h1>

      <div className="max-w-2xl mx-auto p-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white p-4 mb-4 rounded-lg shadow">
            <button
              onClick={() => toggleQuestion(index)}
              className="flex justify-between w-full text-left text-lg font-semibold text-gray-800 focus:outline-none"
            >
              {faq.question}
              <span>{openQuestion === index ? '▲' : '▼'}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-700 ease-in-out ${
                openQuestion === index ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

        <Footer/>
    </div>
  );
};

export default FAQ;
