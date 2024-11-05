import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { Alert } from '@mui/material'; // Import Alert for displaying error messages
import './Signup.css'; // You can add additional styling here
import logo from './assets/logo.jpg'; // Adjust the path based on where your logo is stored
import Footer from './Footer';

const Signup = () => {
  const [uniqueID, setUniqueID] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [adminID, setAdminID] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const BASE_URL = 'http://localhost:8081';


  const handleSignup = async () => {
    // Reset error state
    setError('');

    // Check if fields are filled
    if (!uniqueID || !name || !password || !confirmPassword || !role || !adminID) {
      setError('Please fill in all fields');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Send POST request to /users
      const response = await axios.post(`${BASE_URL}/users`, {
        id: uniqueID, // uniqueID will be mapped to 'id' in the backend
        name: name,
        type: role, // role will be mapped to 'type'
        password: password,
        adminId: adminID,
      });

      // Show success message
      console.log("response", response);
      
      alert('Account created successfully!');

      // Store role and navigate to the respective dashboard
      localStorage.setItem('role', role);
      if (role === 'admin') {
        navigate('/admin-dashboard');
      } else if (role === 'college') {
        navigate('/college-dashboard');
      } else if (role === 'company') {
        navigate('/company-dashboard');
      }
    } catch (error) {
      // Handle error (could be a network error or server issue)
      console.error('Error creating account:', error);
      setError('Failed to create account. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Header */}
      <header className="text-center py-10 bg-white shadow">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Career Grow Logo" className="h-12 mr-3 rounded-full" /> {/* Logo */}
          <h1 className="text-4xl font-extrabold text-gray-900 underline">
            Career Grow
          </h1>
        </div>
        <p className="mt-2 text-lg text-gray-600">
          Create an account to start your journey with us
        </p>
      </header>

      <div className="signup-container container mx-auto p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>

        {/* Display error message if any */}
        {error && <Alert severity="error" className="mb-4">{error}</Alert>}

        {/* Unique ID Field */}
        <div className="form-group mb-4">
          <label htmlFor="uniqueID" className="block text-sm font-medium text-gray-700">Unique ID:</label>
          <input
            type="text"
            id="uniqueID"
            value={uniqueID}
            onChange={(e) => setUniqueID(e.target.value)}
            placeholder="Enter your unique ID"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Name Field */}
        <div className="form-group mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Password Field */}
        <div className="form-group mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="form-group mb-4">
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Role Selection */}
        <div className="form-group mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="college">College</option>
            <option value="company">Company</option>
          </select>
        </div>

        {/* Admin ID Field */}
        <div className="form-group mb-4">
          <label htmlFor="adminID" className="block text-sm font-medium text-gray-700">Admin ID:</label>
          <input
            type="text"
            id="adminID"
            value={adminID}
            onChange={(e) => setAdminID(e.target.value)}
            placeholder="Enter admin ID"
            className="mt-1 block w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Signup Button */}
        <button className="btn-primary bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition" onClick={handleSignup}>
          Sign Up
        </button>

        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>

    <Footer/>
    </div>
  );
};

export default Signup;
