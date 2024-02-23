'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Dropdown from './Dropdown'; 
import Logo from '../../public/logo  (2).png'

function Header() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Track sign-in state
  const [language, setLanguage] = useState('en'); // Default language
  const languages = ['en', 'es', 'fr', 'de']; // Supported languages

  const handleSignin = () => {
    setIsSignedIn(true); // Simulate sign-in
  };

  const handleSignout = () => {
    setIsSignedIn(false); // Simulate sign-out
  };

  const handleLanguageChange = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage); // Update language
  };

  const dropdownItems = [
    {
      label: 'Sign In',
      onClick: handleSignin,
      disabled: isSignedIn, // Disable if signed in
    },
    {
      label: 'Sign Out',
      onClick: handleSignout,
      disabled: !isSignedIn, // Disable if signed out
    },
    {
      label: 'Create Account',
      onClick: () => alert('Not yet implemented'), // Placeholder for now
    },
  ];

  const search = (query: string) => {
    console.log('Search for:', query); // Simulate search
  };

  return (
    <header className="bg-black text-white py-4 flex items-center flex-wrap container mx-auto">
      {/* Brand and Navigation */}
      <div className="flex justify-between items-center">
        <div className="brand flex items-center">
          <Image src={Logo} height={150} width={150}  alt='Logo'/>
        </div>
        <nav className="header-nav flex flex-grow px-4 my-2">
          <Dropdown
            label={language.toUpperCase()}
            items={languages.map((lang) => ({
              label: lang.toUpperCase(),
              value: lang,
            }))}
            selectedItem={language}
            onSelect={handleLanguageChange}
            className="mr-4 text-base text-gray-200 hover:text-white" // Enhanced styling
          />
          {/* Other navigation links if needed, applying similar styling */}
        </nav>
      </div>

      {/* Search and User Options */}
      <div className="flex items-center mt-4">
        <div className="search-bar flex items-center mr-4">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => search(e.target.value)}
            className="bg-gray-700 px-3 py-2 rounded-md text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-700">
            Search
          </button>
        </div>
        <div className="user-options flex items-center">
          {!isSignedIn && (
            <button
              className="bg-transparent hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSignin}
            >
              Sign In
            </button>
          )}
          {isSignedIn && (
            <Dropdown
              label="My Account"
              items={dropdownItems} // Use the same dropdown component
              className="text-base text-gray-200 hover:text-white" // Enhanced styling
            />
          )}
        </div>
      </div>

      {/* Right Header Navigation */}
      <div className="right-header flex items-center mt-4 px-32 ">
        <ul className="flex flex-grow justify-end">
          <li className="px-4">
            <a href="/get-started">Get Started</a>
          </li>
          <li className="px-4">
            <a href="/contact-us">Contact Us</a>
          </li>
          <li className="px-4">
            <a href="/resources">Resources</a>
          </li>
          <li className="px-4">
              <a href="/get-support">Get Support</a>
          </li>
          <li className="px-4">
              <a href="/under-attack">Under Attack?</a>
          </li>
        </ul>
        </div>
    </header>
  );
}

export default Header;
