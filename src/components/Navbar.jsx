import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 md:px-12 flex items-center justify-between shadow-sm">
      <div className="flex items-center">
        <img src="../assets/Logo.png" alt="Carbon Crunch Logo" className="h-8" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Our Work</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Blog</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
        <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
      </div>
      
      <div className="hidden md:flex items-center space-x-4">
        <button className="py-2 px-4 rounded-sm bg-green-100 font-bold text-green-500 hover:bg-green-200">Login</button>
        <button className="py-2 px-4 rounded-sm bg-green-500 font-bold text-black hover:bg-green-600">Book Demo</button>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md p-4 md:hidden z-50">
          <div className="flex flex-col space-y-4">
            <a href="#" className="text-gray-800 hover:text-gray-600">Home</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Our Work</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Blog</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">About Us</a>
            <a href="#" className="text-gray-800 hover:text-gray-600">Contact</a>
            <div className="flex flex-col space-y-2">
              <button className="py-2 px-4 rounded-full bg-green-100 text-green-500 hover:bg-green-200 font-bold">Login</button>
              <button className="py-2 px-4 rounded-full bg-green-500 text-black hover:bg-green-600 font-bold">Book Demo</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
