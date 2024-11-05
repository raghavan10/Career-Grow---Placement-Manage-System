import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { CircularProgress, Alert } from '@mui/material';
import Navbar from './NavBar';
import Footer from './Footer';

const Profile = () => {
  const location = useLocation(); // Access the state passed from Login
  const { id } = location.state || {}; // Extract uniqueID from state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:8081/users/${id}`);
        setUser(response.data);
      } catch (err) {
        setError('Failed to fetch user details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchUserData();
  }, [id]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <div className="container mx-auto p-6 bg-white rounded-lg shadow-md">
      <Navbar/>
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>
      <div className="mb-4">
        <strong>ID:</strong> {user.id}
      </div>
      <div className="mb-4">
        <strong>Name:</strong> {user.name}
      </div>
      <div className="mb-4">
        <strong>Email:</strong> {user.email}
      </div>
      <div className="mb-4">
        <strong>Role:</strong> {user.role}
      </div>
      <div className="mb-4">
        <strong>College:</strong> {user.college || 'N/A'}
      </div>
      <div className="mb-4">
        <strong>Certificates:</strong>{' '}
        {user.certificates?.length ? (
          <ul>
            {user.certificates.map((cert, index) => (
              <li key={index}>{cert}</li>
            ))}
          </ul>
        ) : (
          'No certificates available'
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Profile;
