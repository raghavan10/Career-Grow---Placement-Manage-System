import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // To make HTTP requests
import { CircularProgress, Alert } from '@mui/material'; // For loading spinner and error messages
import logo from './assets/logo.jpg'; // Assuming you have a logo image
import Footer from './Footer';

const Login = () => {
  const [uniqueID, setUniqueID] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setLoading(true);
    setError(null);

    try {
      // Base URL of the backend
      const BASE_URL = 'http://localhost:8081';

      // Make a GET request to retrieve user data by uniqueID
      const response = await axios.get(`${BASE_URL}/users/${uniqueID}`);
      const user = response.data;




      // Validate user data
      if (user && user.password === password && user.type === role) {
        // Check role and navigate to the respective dashboard
        if (role === 'admin') {
          navigate('/admin-dashboard');
        } else if (role === 'college') {
          navigate('/college-dashboard');
        } else if (role === 'company') {
          navigate('/company-dashboard');
        } else {
          setError('Invalid role selected');
        }
        // After checking role
      } else {
        setError('Invalid credentials or role mismatch');
      }
    } catch (error) {
      setError('Failed to log in. Please check your credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      {/* Header */}
      <header className="text-center py-10 bg-white shadow">
        <div className="flex justify-center items-center">
          <img src={logo} alt="Career Grow Logo" className="h-12 mr-3 rounded-full" />
          <h1 className="text-4xl font-extrabold text-gray-900 underline">Career Grow</h1>
        </div>
        <p className="mt-2 text-lg text-gray-600">Login with your credentials for an existing account</p>
      </header>

      {/* Login Form */}
      <div className="signup-container container mx-auto p-6 bg-white rounded-lg shadow-md max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

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
            disabled={loading} // Disable inputs during loading
            aria-label="Unique ID"
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
            disabled={loading} // Disable inputs during loading
            aria-label="Password"
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
            disabled={loading} // Disable inputs during loading
            aria-label="Role selection"
          >
            <option value="">Select Role</option>
            <option value="admin">Admin</option>
            <option value="college">College</option>
            <option value="company">Company</option>
          </select>
        </div>

        {/* Login Button */}
        <button
          className="btn-primary bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} /> : 'Login'}
        </button>

        <p className="mt-4 text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline">Create Account</Link>
        </p>
      </div>

    <Footer/>
    </div>
  );
};

export default Login;