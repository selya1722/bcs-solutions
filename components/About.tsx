"use client";
import Image from "next/image";
import { useState } from "react";

const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"vision" | "mission">("vision");

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-900">
      <div className="container mx-auto px-6 lg:px-8">
        {/* About Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 mb-24">
          <div className="lg:w-1/2 relative group">
            <Image
              src="/images/about.png"
              alt="About BC Security Solutions"
              width={560}
              height={360}
              className="rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-5xl font-extrabold text-blue-900 tracking-tight">
              About BC Security Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Best Challengers Security Solutions, we lead the security industry with unmatched expertise in event security, property guarding, and manpower supply. Our commitment to professionalism ensures tailored services that deliver peace of mind, safety, and operational excellence.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Guided by our Managing Director’s 20+ years of experience, we bring integrity, discipline, and strategic foresight to every operation. Our highly trained team is dedicated to securing what matters most to you.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From large-scale events to ongoing operations, BC Security Solutions stands for trust, reliability, and excellence. We don’t just provide security—we deliver confidence.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <h3 className="text-4xl font-semibold text-center text-blue-900 mb-12">
            Our Core Values
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Professionalism",
                desc: "Highly trained staff delivering services with unmatched expertise.",
              },
              {
                title: "Integrity",
                desc: "Operating with honesty and transparency in every interaction.",
              },
              {
                title: "Vigilance",
                desc: "Proactive watchfulness to prevent security breaches.",
              },
              {
                title: "Client Satisfaction",
                desc: "Your peace of mind is our ultimate priority.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <h4 className="text-2xl font-bold text-blue-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission with Tabs */}
        <div className="relative">
          <h3 className="text-4xl font-semibold text-center text-white bg-gradient-to-r from-blue-900 to-indigo-900 py-4 rounded-xl shadow-lg mb-8">
            Our Vision & Mission
          </h3>
          <p className="text-xl text-center text-gray-600 mb-10 max-w-3xl mx-auto">
            Guiding principles that fuel our commitment to exceptional security services.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("vision")}
              className={`px-8 py-3 rounded-l-full text-lg font-medium transition-all duration-300 ${
                activeTab === "vision"
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Vision
            </button>
            <button
              onClick={() => setActiveTab("mission")}
              className={`px-8 py-3 rounded-r-full text-lg font-medium transition-all duration-300 ${
                activeTab === "mission"
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Mission
            </button>
          </div>

          {/* Sliding Content */}
          <div className="relative overflow-hidden h-auto min-h-[200px]">
            <div
              className={`transition-transform duration-700 ease-in-out flex w-[200%] ${
                activeTab === "vision" ? "translate-x-0" : "-translate-x-1/2"
              }`}
            >
              {/* Vision Content */}
              <div className="w-1/2 px-4">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                    👁️ Our Vision
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    To be Sri Lanka’s most trusted security provider, setting benchmarks for excellence, innovation, and integrity in safeguarding people, property, and assets.
                  </p>
                  <p className="mt-3 text-gray-600 text-center leading-relaxed">
                    We envision a society where safety empowers businesses to thrive and communities to flourish.
                  </p>
                </div>
              </div>

              {/* Mission Content */}
              <div className="w-1/2 px-4">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h4 className="text-2xl font-bold text-blue-900 mb-4 text-center">
                    🎯 Our Mission
                  </h4>
                  <p className="text-gray-600 text-center leading-relaxed">
                    To deliver exceptional security services through highly trained personnel, advanced tools, and dedicated leadership, ensuring safety and peace with professionalism and transparency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;