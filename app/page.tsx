"use client";

import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Methodology from "@/components/Methodology";
import BeforeAfter from "@/components/BeforeAfter";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "case-studies", "testimonials", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Methodology />
        <BeforeAfter />
        <HowItWorks />
        <Services />
        <CaseStudies />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
