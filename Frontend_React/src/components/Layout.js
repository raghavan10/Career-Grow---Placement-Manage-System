// src/components/Layout.js
import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <NavBar />
      <main className="flex-grow">
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
