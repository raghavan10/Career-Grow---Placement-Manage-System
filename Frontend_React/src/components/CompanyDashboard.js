import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import Footer from './Footer';

const CompanyDashboard = () => {
  const [colleges, setColleges] = useState([]);
  const [students, setStudents] = useState([]);
  const [certificates, setCertificates] = useState(null);
  const BASE_URL = 'http://localhost:8081';

  useEffect(() => {
    // Fetch colleges when the component mounts
    axios.get(`${BASE_URL}/colleges`)
      .then(response => {
        setColleges(response.data);
      })
      .catch(error => {
        console.error("Error fetching colleges:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch all students when the component mounts
    axios.get(`${BASE_URL}/students`)
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error("Error fetching students:", error);
      });
  }, []);

  const fetchCertificates = (studentId) => {
    // Fetch certificates for the selected student
    axios.get(`${BASE_URL}/certificates`)
      .then(response => {
        setCertificates(response.data.certificates); // Assuming certificates are part of the student's response
      })
      .catch(error => {
        console.error("Error fetching certificates:", error);
      });
  };

  return (
    <div className="container mx-auto ">
      <Navbar/>
      <div className='p-8'>
      <h1 className="text-3xl font-bold mb-8 text-center">Company Dashboard</h1>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Colleges</h2>
        <ul className="divide-y divide-gray-200">
          {colleges.map((college) => (
            <li key={college.college_id} className="py-4">
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-medium">{college.collegeName}</span> - <span className="text-gray-600">{college.location}</span>
                </div>
              </div>

              {/* List of students for the college */}
              <ul className="pl-4 mt-2 space-y-2">
                {students
                  .filter(student => student.college_id === college.college_id)
                  .map((student) => (
                    <li key={student.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm">
                      <div>
                        <span className="text-md font-medium">{student.name}</span> - {student.qualification}
                      </div>
                      <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        onClick={() => fetchCertificates(student.id)}
                      >
                        View Certificates
                      </button>
                    </li>
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/* Certificates Section */}
      {certificates && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <ul className="list-disc pl-6">
            {certificates.map((certificate, index) => (
              <li key={index} className="text-gray-700">{certificate.name}</li>
            ))}
          </ul>
        </div>
      )}
      </div>
      <Footer/>
    </div>
  );
};

export default CompanyDashboard;
