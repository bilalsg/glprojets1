"use client"
import React, { useState } from 'react';

const ModernSidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`h-screen flex overflow-hidden ${isOpen ? 'ml-64' : 'ml-0'}`}>
      {/* Sidebar */}
      <div className="bg-gray-800 transition-all duration-300 ease-in-out">
        <div className="flex justify-between p-4">
          <div className="text-white">Logo</div>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            {isOpen ? 'Close' : 'Open'}
          </button>
        </div>
        <nav>
          <a href="/lawdash/lawerappointement" className="block p-4 text-white hover:bg-gray-700">Home</a>
          <a href="#" className="block p-4 text-white hover:bg-gray-700">About</a>
          <a href="#" className="block p-4 text-white hover:bg-gray-700">Services</a>
          {/* Add more links as needed */}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-grow p-4 bg-gray-100">
        {/* Your main content goes here */}
        <h1>Main Content</h1>
      </div>
    </div>
  );
};

export default ModernSidebar;
