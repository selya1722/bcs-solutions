
"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import GetQuote from "../components/GetQuote";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main className="font-[Inter] bg-[var(--primary-dark)] text-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <GetQuote />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
