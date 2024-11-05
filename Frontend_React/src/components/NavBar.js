// components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.jpg'; // Adjust path if needed
import {
  HomeIcon,
  InformationCircleIcon,
  QuestionMarkCircleIcon,
  PhoneIcon,
  UserIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';

const Navbar = ({ uniqueID }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleProfileDropdown = () => setProfileOpen(!isProfileOpen);
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-transparent text-black py-4 shadow-md px-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Career Grow Logo" className="h-12 w-12 rounded-full" />
          <span className="text-3xl font-bold">Career Grow</span>
        </div>

        {/* Desktop Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <button onClick={() => navigate('/')} className="flex items-center space-x-1 hover:text-gray-400">
            <HomeIcon className="h-5 w-5" />
            <span>Home</span>
          </button>
          <button onClick={() => navigate('/about')} className="flex items-center space-x-1 hover:text-gray-400">
            <InformationCircleIcon className="h-5 w-5" />
            <span>About Us</span>
          </button>
          <button onClick={() => navigate('/faq')} className="flex items-center space-x-1 hover:text-gray-400">
            <QuestionMarkCircleIcon className="h-5 w-5" />
            <span>FAQ</span>
          </button>
          <button onClick={() => navigate('/contact')} className="flex items-center space-x-1 hover:text-gray-400">
            <PhoneIcon className="h-5 w-5" />
            <span>Contact Us</span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative">
            <button
              onClick={toggleProfileDropdown}
              className="flex items-center space-x-1 hover:text-gray-400 focus:outline-none"
            >
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </button>
            {isProfileOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg py-2">
                <button
                  onClick={() => navigate('/profile')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Profile
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 hover:text-gray-600 focus:outline-none"
          >
            {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Popup Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white text-gray-800 shadow-lg z-10">
          <div className="flex flex-col items-start px-4 py-4 space-y-2">
            <button onClick={() => { navigate('/'); toggleMobileMenu(); }} className="flex items-center space-x-1 hover:text-gray-400">
              <HomeIcon className="h-5 w-5" />
              <span>Home</span>
            </button>
            <button onClick={() => { navigate('/about'); toggleMobileMenu(); }} className="flex items-center space-x-1 hover:text-gray-400">
              <InformationCircleIcon className="h-5 w-5" />
              <span>About Us</span>
            </button>
            <button onClick={() => { navigate('/faq'); toggleMobileMenu(); }} className="flex items-center space-x-1 hover:text-gray-400">
              <QuestionMarkCircleIcon className="h-5 w-5" />
              <span>FAQ</span>
            </button>
            <button onClick={() => { navigate('/contact'); toggleMobileMenu(); }} className="flex items-center space-x-1 hover:text-gray-400">
              <PhoneIcon className="h-5 w-5" />
              <span>Contact Us</span>
            </button>
            <button onClick={() => { navigate('/profile'); toggleMobileMenu(); }} className="flex items-center space-x-1 hover:text-gray-400">
              <UserIcon className="h-5 w-5" />
              <span>Profile</span>
            </button>
            <button onClick={() => { navigate('/'); toggleMobileMenu(); }} className="flex items-center space-x-1 hover:text-gray-400">
              <span>Logout</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
