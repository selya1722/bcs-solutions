
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Why Us", id: "why-us" },
  { label: "Get a Quote", id: "get-a-quote" },
  { label: "Contact", id: "contact-us" },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>): void => {
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY;
      setShowHeader(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-[var(--primary-dark)] z-50 shadow-lg transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer space-x-3"
          onClick={() => scrollToSection("home")}
          role="button"
          aria-label="Go to Home"
        >
          <div className="h-12 w-12 overflow-hidden flex items-center justify-center">
            <Image
              src="/images/bclogo.png"
              alt="BC Security Solutions"
              width={64}
              height={64}
              className="object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="flex flex-col leading-tight font-[Inter]">
            <span className="text-lg font-semibold text-gray-200 tracking-tight">
              BC Security Solutions
            </span>
            <span className="text-xs font-medium text-gray-400 tracking-wide">
              We Guard Your Happiness
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-white text-base font-medium hover:text-[var(--primary-yellow)] transition-colors duration-300 cursor-pointer relative group"
              aria-label={`Go to ${label}`}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--primary-yellow)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </nav>

        {/* Quote Button Desktop */}
               <a
  href="#get-a-quote"
  className="hidden md:inline-block bg-[var(--primary-yellow)] text-[var(--primary-dark)] px-5 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-yellow-500 hover:scale-105 active:scale-95 shadow-md cursor-pointer"
  role="button"
  aria-label="Get a Quote"
>
  Get a Quote
</a>


        {/* Hamburger Icon */}
        <button
          className="md:hidden text-white z-50 focus:outline-none focus:ring-2 focus:ring-[var(--primary-yellow)] rounded-md p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <div className="h-6 w-6 relative overflow-hidden">
            <svg
              className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-0 -translate-x-6" : "opacity-100 translate-x-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
            <svg
              className={`h-6 w-6 absolute top-0 left-0 transition-all duration-300 ease-in-out ${
                mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40 transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
        aria-hidden={!mobileMenuOpen}
      >
        <nav
          className={`fixed top-16 left-0 w-full bg-[var(--primary-dark)] shadow-lg transition-all duration-300 ease-in-out z-50 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          } px-6 pb-6 pt-4 space-y-3`}
          onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
          aria-label="Mobile navigation"
        >
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left text-white text-base font-medium hover:text-[var(--primary-yellow)] transition-colors duration-300 cursor-pointer py-2 relative group"
              aria-label={`Go to ${label}`}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[var(--primary-yellow)] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <a
            href="#get-a-quote"
            className="block bg-[var(--primary-yellow)] text-[var(--primary-dark)] px-5 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-yellow-500 hover:scale-105 active:scale-95 text-center cursor-pointer"
            role="button"
            aria-label="Get a Quote"
          >
            Get a Quote
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
