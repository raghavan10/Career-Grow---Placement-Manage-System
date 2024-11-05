import React from 'react';
import { useNavigate } from 'react-router-dom';
import job from './assets/job.jpg';
import job2 from'./assets/job2.jpg';
import Navbar from './NavBar';
import Footer from './Footer';
import TrustedBySection from './TrustedBySection';
 

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  // Replace uniqueID with a dummy value or fetch it based on user login
  const uniqueID = '12345'; // Replace this with actual uniqueID logic

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Navbar />
      {/* Header */}
      <header className="text-center py-10 bg-white shadow">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Welcome to Career Grow
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Empowering schools and corporates to manage communication
        </p>
      </header>

      {/* Centered Screenshot Section with Faded Background */}
      <div
        className="relative px-4 pt-20 pb-10 border-b flex items-center justify-center"
        style={{
          backgroundImage: `url('bootstrap-docs.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
        <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={job}
              alt="Example Screenshot"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div className="text-left">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
              Who are we?
            </h1>
            <div className="border-b-2 border-gray-300 w-30 mx-auto my-4"></div>
            <p className="text-lg text-gray-700 mb-4">
            Career Grow is a Placement Management that connects students with top-tier opportunities and provides powerful tools for admins to efficiently manage the recruitment process.
            </p>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 bg-blue-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <div className="text-center md:text-left px-4 ml-10"> {/* Added ml-10 for left margin */}
      <h2 className="text-3xl font-bold text-gray-800">Here to Efficient management</h2>
      <div className="border-b-2 border-gray-300 w-30 mx-auto my-4"></div>
      <p className="mt-4 text-lg text-gray-700">
        Manage job placements, register for placements, and kickstart your career with 
        our comprehensive placement management platform.
      </p>
      <button
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        onClick={handleSignUp}
      >
        Get Started
      </button>
    </div>


    {/* Right Image */}
    <div className="flex justify-center">
      <img 
        src={job2}
        alt="Hero pic" 
        className="w-full max-w-sm rounded-lg shadow-lg"
      />
    </div>
  </div>
</section>


      {/* Features Section */}
      <section className="grid gap-8 md:grid-cols-3 p-10">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Register</h3>
          <p className="text-gray-600">
            Sign up to get access to job listings, apply for positions, and manage your placement applications.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Browse Jobs</h3>
          <p className="text-gray-600">
            Explore a wide range of job opportunities from top companies around the world.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Admin Panel</h3>
          <p className="text-gray-600">
            Admins can manage job postings, track student applications, and oversee the placement process.
          </p>
        </div>
      </section>

      {/* Login and Sign Up Buttons */}
      <section className="text-center py-10 bg-gray-100">
        <button
          className="mx-2 bg-gray-800 text-white px-6 py-2 rounded-md shadow hover:bg-gray-700 transition"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="mx-2 bg-blue-600 text-white px-6 py-2 rounded-md shadow hover:bg-blue-700 transition"
          onClick={handleSignUp}
        >
          Sign Up
        </button>
      </section>

      <TrustedBySection/>

        <Footer/>
    </div>
  );
};

export default Home;
