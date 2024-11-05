import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './NavBar';
import Footer from './Footer';

const AdminDashboard = () => {
  const [proxyPlacements, setProxyPlacements] = useState([]);
  const [proxyStudents, setProxyStudents] = useState([]);

  const BASE_URL = 'http://localhost:8081';

  const fetchPlacements = async () => {
    
    try {
      const response = await axios.get(`${BASE_URL}/proxyplacements`);
      setProxyPlacements(response.data);
    } catch (error) {
      console.error('Error fetching proxy placements:', error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/proxystudents`);
      setProxyStudents(response.data);
    } catch (error) {
      console.error('Error fetching proxy students:', error);
    }
  };

  useEffect(() => {
    fetchPlacements();
    fetchStudents();
  }, [proxyPlacements, proxyStudents]);

  const acceptPlacement = async (placement) => {
    try {
      if (placement.update) {
        await axios.put(`${BASE_URL}/placements/${placement.id}`, placement);
        alert('Placement update accepted and applied!');
      } else {
        await axios.post(`${BASE_URL}/placements`, placement);
        alert('New placement accepted and posted!');
      }
      await axios.delete(`${BASE_URL}/proxyplacements/${placement.id}`);
      fetchPlacements();
    } catch (error) {
      console.error('Error accepting placement:', error);
    }
  };

  const rejectPlacement = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/proxyplacements/${id}`);
      alert('Placement request rejected and removed.');
      fetchPlacements();
    } catch (error) {
      console.error('Error rejecting placement:', error);
    }
  };

  const acceptStudent = async (student) => {
    try {
      if (student.update) {
        await axios.put(`${BASE_URL}/students/${student.id}`, student);
        alert('Student update accepted and applied!');
      } else {
        await axios.post(`${BASE_URL}/students`, student);
        alert('New student accepted and posted!');
      }
      await axios.delete(`${BASE_URL}/proxystudents/${student.id}`);
      fetchStudents();
    } catch (error) {
      console.error('Error accepting student:', error);
    }
  };

  const rejectStudent = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/proxystudents/${id}`);
      alert('Student request rejected and removed.');
      fetchStudents();
    } catch (error) {
      console.error('Error rejecting student:', error);
    }
  };

  return (
    <div className="w-full">
      <Navbar/>
      <div className='p-8'>
      <h2 className="text-3xl font-bold text-center mb-8">Admin Dashboard</h2>

      {/* Add Placement Requests */}
      <h3 className="text-2xl font-semibold mb-4">Pending Add Placement Requests</h3>
      <PlacementTable
        placements={proxyPlacements.filter((p) => !p.update)}
        onAccept={acceptPlacement}
        onReject={rejectPlacement}
      />

      {/* Update Placement Requests */}
      <h3 className="text-2xl font-semibold mb-4">Pending Update Placement Requests</h3>
      <PlacementTable
        placements={proxyPlacements.filter((p) => p.update)}
        onAccept={acceptPlacement}
        onReject={rejectPlacement}
      />

      {/* Add Student Requests */}
      <h3 className="text-2xl font-semibold mb-4">Pending Add Student Requests</h3>
      <StudentTable
        students={proxyStudents.filter((s) => !s.update)}
        onAccept={acceptStudent}
        onReject={rejectStudent}
      />

      {/* Update Student Requests */}
      <h3 className="text-2xl font-semibold mb-4">Pending Update Student Requests</h3>
      <StudentTable
        students={proxyStudents.filter((s) => s.update)}
        onAccept={acceptStudent}
        onReject={rejectStudent}
      />
      </div>
      <Footer/>
    </div>
  );
};

const PlacementTable = ({ placements, onAccept, onReject }) => (
  <table className="w-full table-auto border-collapse border border-gray-300 mb-8">
    <thead>
      <tr className="bg-gray-100">
        {['ID', 'Name', 'College', 'Date', 'Qualification', 'Year', 'Student ID', 'Company ID', 'Job Description', 'LPA', 'Actions'].map((header) => (
          <th key={header} className="border border-gray-300 p-2">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {placements.map((placement) => (
        <tr key={placement.id} className="odd:bg-white even:bg-gray-50">
          <td className="border border-gray-300 p-2">{placement.id}</td>
          <td className="border border-gray-300 p-2">{placement.name}</td>
          <td className="border border-gray-300 p-2">{placement.college}</td>
          <td className="border border-gray-300 p-2">{placement.date}</td>
          <td className="border border-gray-300 p-2">{placement.qualification}</td>
          <td className="border border-gray-300 p-2">{placement.year}</td>
          <td className="border border-gray-300 p-2">{placement.stud_id}</td>
          <td className="border border-gray-300 p-2">{placement.com_id}</td>
          <td className="border border-gray-300 p-2">{placement.jd}</td>
          <td className="border border-gray-300 p-2">{placement.lpa}</td>
          <td className="border border-gray-300 p-2 flex justify-around">
            <button onClick={() => onAccept(placement)} className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>
            <button onClick={() => onReject(placement.id)} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const StudentTable = ({ students, onAccept, onReject }) => (
  <table className="w-full table-auto border-collapse border border-gray-300 mb-8">
    <thead>
      <tr className="bg-gray-100">
        {['ID', 'Name', 'College', 'Roll No', 'Qualification', 'Course', 'Year', 'Certificate', 'Hall Ticket', 'Certificate ID', 'College ID', 'Actions'].map((header) => (
          <th key={header} className="border border-gray-300 p-2">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {students.map((student) => (
        <tr key={student.id} className="odd:bg-white even:bg-gray-50">
          <td className="border border-gray-300 p-2">{student.id}</td>
          <td className="border border-gray-300 p-2">{student.name}</td>
          <td className="border border-gray-300 p-2">{student.college}</td>
          <td className="border border-gray-300 p-2">{student.rollno}</td>
          <td className="border border-gray-300 p-2">{student.qualification}</td>
          <td className="border border-gray-300 p-2">{student.course}</td>
          <td className="border border-gray-300 p-2">{student.year}</td>
          <td className="border border-gray-300 p-2">{student.certificate}</td>
          <td className="border border-gray-300 p-2">{student.hallticketno}</td>
          <td className="border border-gray-300 p-2">{student.certificate_Id}</td>
          <td className="border border-gray-300 p-2">{student.college_id}</td>
          <td className="border border-gray-300 p-2 flex justify-around">
            <button onClick={() => onAccept(student)} className="bg-green-500 text-white px-2 py-1 rounded">Accept</button>
            <button onClick={() => onReject(student.id)} className="bg-red-500 text-white px-2 py-1 rounded">Reject</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
  
export default AdminDashboard;
