import React from 'react';

function Footer() {
  return (
    <footer className="bg-black text-white py-8 md:py-12 px-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Popular Resources */}
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-base font-medium mb-2">Popular Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Communities
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Content Library
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Cyberpedia
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Event Center
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Investor
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Product A-Z
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Tech Docs
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-blue-500">
                Unit 42
              </a>
            </li>
            {/* ... other Popular Resources links */}
          </ul>
        </div>

        {/* Legal & Corporate Links */}
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-base font-medium mb-2">Legal & Corporate</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/legal-notices" className="hover:text-blue-500">
                Privacy Statement
              </a>
            </li>
            <li>
              <a href="/legal-notices" className="hover:text-blue-500">
                Trust Center
              </a>
            </li>
            <li>
              <a href="/legal-notices" className="hover:text-blue-500">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/legal-notices" className="hover:text-blue-500">
               Documents
              </a>
            </li>
            <li>
              <a href="/legal-notices" className="hover:text-blue-500">
              Do Not Sell or Share My Personal Information
              </a>
            </li>
            {/* ... other Legal & Corporate links */}
          </ul>
        </div>

        {/* About Us & Support */}
        <div className="md:w-1/3 mb-4 md:mb-0">
          <h3 className="text-base font-medium mb-2">About Us & Support</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/about-us" className="hover:text-blue-500">
                About Us
              </a>
            </li>
            <li>
              <a href="/customers" className="hover:text-blue-500">
                Customers
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-blue-500">
                Careers
              </a>
            </li>
            <li>
              <a href="/contact-us" className="hover:text-blue-500">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/manage-email-preferences" className="hover:text-blue-500">
                Manage Email Preferences
              </a>
            </li>
            <li>
              <a href="/newsroom" className="hover:text-blue-500">
                Newsroom
              </a>
            </li>
            <li>
              <a href="/product-certifications" className="hover:text-blue-500">
                Product Certifications
              </a>
            </li>
            <li>
              <a href="/report-a-vulnerability" className="hover:text-blue-500">
                Report a Vulnerability
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
