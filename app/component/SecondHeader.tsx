'use client'
import React from 'react';
import Dropdown from './Dropdown'; // Import your custom Dropdown component
import logo from '../../public/logo  (2).png'
import Image from 'next/image';

function SecondHeader() {
  return (
    <header className="bg-black text-white py-4 flex items-center flex-wrap container mx-auto justify-center ">
      {/* Brand and Navigation */}
      <div className="flex justify-around items-center ">
        <div className="brand flex items-center">
          {/* Your logo/app name here */}
          <Image src={logo} height={120} width={100}  alt="Your company logo"/>
        </div>
        <nav className="header-nav flex flex-grow">
          <ul className="flex items-center space-x-8">
            <li>
              <Dropdown
                label="Products" // Optional: Label for dropdown
                items={[
                  { label: 'Product 1', href: '/products/product-1' },
                  { label: 'Product 2', href: '/products/product-2' },
                  { label: 'More Products', href: '/products' },
                ]}
                className="text-base text-gray-200 hover:text-white"
              />
            </li>
            <li>
              <Dropdown
                label="Solutions" // Optional: Label for dropdown
                items={[
                  { label: 'Solution 1', href: '/solutions/solution-1' },
                  { label: 'Solution 2', href: '/solutions/solution-2' },
                  { label: 'More Solutions', href: '/solutions' },
                ]}
                className="text-base text-gray-200 hover:text-white"
              />
            </li>
            <li>
              <a href="/services" className="text-base text-gray-200 hover:text-white">
                Services
              </a>
            </li>
            <li>
              <Dropdown
                label="Partners" // Optional: Label for dropdown
                items={[
                  { label: 'Partner 1', href: '/partners/partner-1' },
                  { label: 'Partner 2', href: '/partners/partner-2' },
                  { label: 'More Partners', href: '/partners' },
                ]}
                className="text-base text-gray-200 hover:text-white"
              />
            </li>
            <li>
              <a href="/company" className="text-base text-gray-200 hover:text-white">
                Company
              </a>
            </li>
            <li>
              <Dropdown
                label="More" // Optional: Label for dropdown
                items={[
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact', href: '/contact' },
                  { label: 'Careers', href: '/careers' },
                ]}
                className="text-base text-gray-200 hover:text-white"
              />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default SecondHeader;
