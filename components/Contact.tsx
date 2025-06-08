"use client";
import { FormEvent, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("An error occurred. Please try again.");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white text-gray-900" id="contact-us">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-8 animate-fade-in">
          Get in Touch with Us
        </h2>
        <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto animate-fade-in animate-delay-200">
          Have questions or ready to secure your future? Contact us for a personalized security assessment.
        </p>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-xl animate-slide-up">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="Your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>
             <button
  type="submit"
  className="w-full bg-[var(--primary-yellow)] text-black-400 p-4 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all duration-300 cursor-pointer"
>
  Send Message
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
          <div className="animate-slide-up">
            <h3 className="text-3xl font-semibold text-blue-900 mb-6">Contact Information</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-medium">Address:</span> Colombo, Sri Lanka
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a href="tel:+94777109874" className="text-blue-600 hover:underline">
                  +94 77 710 9874
                </a>
              </p>
              <p>
                <span className="font-medium">Emergency Line:</span>{" "}
                <a href="tel:+94777109874" className="text-blue-600 hover:underline">
                  +94 77 710 9874
                </a>
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                <a href="mailto:bcssolutions12@gmail.com" className="text-blue-600 hover:underline">
                  bcssolutions12@gmail.com
                </a>
              </p>
            </div>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31691.03168408504!2d80.00621794999996!3d6.845091950000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2518e99e2ee8d%3A0xc3eebfdbc86273ee!2sHomagama!5e0!3m2!1sen!2slk!4v1749043171608!5m2!1sen!2slk"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;