
"use client";
import { FormEvent, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  serviceType: string;
}

const GetQuote: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    serviceType: "",
  });
  const [status, setStatus] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  try {
    const response = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      setStatus("Quote request sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "", serviceType: "" });
    } else {
      setStatus("Failed to send quote request. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting quote request:", error);
    setStatus("An error occurred. Please try again.");
  }
};


  return (
    <section
      id="get-a-quote"
      className="py-16 bg-[var(--light-gray)] text-[var(--primary-dark)] font-[Inter]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 animate-fade-in">
          Request a Free Quote
        </h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto animate-fade-in animate-delay-200">
          Need tailored security solutions? Fill out the form below to get a personalized quote.
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto animate-slide-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-yellow)] focus:border-[var(--primary-yellow)] transition-all duration-300"
                placeholder="Your Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-yellow)] focus:border-[var(--primary-yellow)] transition-all duration-300"
                placeholder="Your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                aria-required="true"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-2">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-yellow)] focus:border-[var(--primary-yellow)] transition-all duration-300"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium mb-2">
                Service Type
              </label>
              <select
                id="serviceType"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-yellow)] focus:border-[var(--primary-yellow)] transition-all duration-300"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                required
                aria-required="true"
              >
                <option value="">Select a service</option>
                <option value="Security Guarding">Security Guarding</option>
                <option value="Man Power Supply">Man Power Supply</option>
                <option value="Event Security">Event Security</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Additional Details
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--primary-yellow)] focus:border-[var(--primary-yellow)] transition-all duration-300"
                placeholder="Describe your security needs"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                aria-required="true"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--primary-yellow)] text-[var(--primary-dark)] p-3 rounded-md font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 cursor-pointer"
              aria-label="Request Quote"
            >
              Request Quote
            </button>
            {status && (
              <p
                className={`mt-4 text-center text-sm font-medium ${
                  status.includes("successfully") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetQuote;
