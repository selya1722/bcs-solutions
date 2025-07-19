"use client";

import React from "react";
import Image from "next/image";

const Hero: React.FC = () => {
  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative bg-primary-dark text-white py-36 md:py-48 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.png"
          alt="Security Background"
          fill
          sizes="100vw"
          className="object-cover object-[center_top] sm:object-[center] opacity-30 sm:opacity-20"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl text-left sm:ml-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Your Safety is Our Mission – Trusted <br className="hidden sm:block" />
            24/7 Security Solutions,<br className="hidden sm:block" />
            Anytime Anywhere
          </h1>

          <p className="text-base sm:text-lg md:text-xl mb-10 max-w-md">
            We protect what matters most. Expert security guarding services delivered with professionalism and precision.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#get-a-quote"
              onClick={(e) => scrollToSection("get-a-quote", e)}
              className="bg-[var(--primary-yellow)] text-[var(--primary-dark)] px-6 py-3 rounded-md font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-white/40 active:scale-95"
            >
              Get a Free Quote
            </a>
            <a
              href="#contact-us"
              onClick={(e) => scrollToSection("contact-us", e)}
              className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-black hover:border-yellow-300 active:scale-95"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
