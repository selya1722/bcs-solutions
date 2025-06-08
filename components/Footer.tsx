"use client";

import React from "react";
import Image from "next/image";

const Footer = () => {
  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-dark-blue text-white py-8 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* BC Security Solutions */}
          <div>
            <h3 className="text-lg font-bold mb-4">BC Security Solutions</h3>
            <p className="text-left-aligned">
              Providing professional security services with integrity and excellence, ensuring peace of mind for our clients 24/7.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col space-y-2">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Services", id: "services" },
                { label: "Why Us", id: "why-us" },
                { label: "Contact", id: "contact-us" },
              ].map(({ label, id }) => (
                <li key={id} className="flex justify-start">
                  <a
                    href={`#${id}`}
                    onClick={(e) => scrollToSection(id, e)}
                    className="hover:text-yellow-400 transition-colors w-full text-left"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Send an Email */}
          <div>
            <h3 className="text-lg font-bold mb-4">Send an Email</h3>
            <div className="flex flex-col sm:flex-row items-center mb-4">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full sm:flex-1 px-4 py-2 rounded-l-md sm:rounded-r-none text-black bg-blue-100 focus:outline-none mb-2 sm:mb-0"
              />
              <button className="w-full sm:w-auto bg-[var(--primary-yellow)] text-black px-4 py-2 rounded-md sm:rounded-l-none hover:bg-orange-500 transition-colors">
                Send
              </button>
            </div>
            
            <div className="flex justify-start space-x-3 mb-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook-icon.png" alt="Facebook" width={24} height={24} />
              </a>

              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/whatsapp-icon.png" alt="WhatsApp" width={24} height={24} />
              </a>
              
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin-icon.png" alt="LinkedIn" width={24} height={24} />
              </a>
            </div>
            <div>
              <p>Phone: +94 77 710 9874</p>
              <p>Email: bcssolutions12@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 md:my-8 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          <p className="text-sm mb-4 md:mb-0 text-center flex-1">© 2025 BC Security Solutions. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;