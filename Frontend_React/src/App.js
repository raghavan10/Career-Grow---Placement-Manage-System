import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/Aboutus'; // Import the AboutUs component
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard';
import CollegeDashboard from './components/CollegeDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import Signup from './components/SignUp';
import Profile from './components/Profile';
import Faq from './components/Faq'; // Import the Profile component
import ContactUs from './components/ContactUs';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/college-dashboard" element={<CollegeDashboard />} />
          <Route path="/company-dashboard" element={<CompanyDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/faq" element={<Faq/>}/>
          <Route path='/contact' element={<ContactUs/>}/>
          {/* <Route path="/profile/:uniqueID" element={<Profile />} /> Place profile route here */}
          <Route path="*" element={<div>404 Page Not Found</div>} /> {/* Catch-all route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
