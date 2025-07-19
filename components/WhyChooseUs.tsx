"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-us"
      className="min-h-screen flex flex-col justify-center py-20 px-4 bg-primary-dark text-white bg-gradient-to-b from-primary-dark via-black to-primary-dark"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-3 animate-fade-in relative">
          Why Choose <span className="text-primary-yellow">BC Security Solutions?</span>
        </h2>

        <p className="text-base sm:text-lg text-center mb-16 max-w-3xl mx-auto text-gray-300 animate-fade-in animation-delay-200">
          Our commitment to excellence sets us apart. Here’s why clients trust us for their security needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Expertise",
              desc: "Our team consists of highly trained professionals with years of experience in security.",
            },
            {
              title: "Reliability",
              desc: "We provide consistent, dependable services to ensure your peace of mind.",
            },
            {
              title: "Tailored Solutions",
              desc: "Customized security plans designed to meet your specific requirements.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-primary-dark border border-gray-700 rounded-xl p-6 sm:p-8 text-center shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-primary-yellow hover:shadow-yellow-500/20 hover:bg-opacity-90"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-primary-yellow transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 group-hover:text-white transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
