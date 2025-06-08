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
    <section id="home" className="relative bg-primary-dark text-white py-36 md:py-48">
      <div className="container mx-auto px-4 text-left relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          Your Safety is Our Mission - Trusted <br />24/7 Security Solutions,<br /> Anytime Anywhere
        </h1>
        <p className="text-lg md:text-xl mb-14 max-w-2xl">
          We protect what matters most. Expert security guarding services delivered with professionalism and precision.
        </p>

        <div className="flex flex-wrap space-x-4">
          {/* Get a Free Quote Button */}
          <a
            href="#get-a-quote"
            onClick={(e) => scrollToSection("get-a-quote", e)}
            className="bg-[var(--primary-yellow)] text-[var(--primary-dark)] px-6 py-3 rounded-md font-semibold transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-xl hover:ring-2 hover:ring-white/40 active:scale-95 cursor-pointer"
            role="button"
            aria-label="Get a Free Quote"
          >
            Get a Free Quote
          </a>
          {/* Contact Us Button */}
          <a
            href="#contact-us"
            onClick={(e) => scrollToSection("contact-us", e)}
            className="relative bg-transparent border border-white text-white px-6 py-3 rounded-md font-semibold transition-all duration-500 ease-in-out hover:bg-gradient-to-r hover:from-yellow-200 hover:to-yellow-400 hover:text-black hover:border-yellow-300 active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-20">
  <Image
    src="/images/hero.png"
    alt="Security Background"
    fill
    style={{ objectFit: "cover", objectPosition: "center top", transform: "scale(1)", transformOrigin: "center" }}
    priority
  />
</div>
    </section>
  );
};

export default Hero;
