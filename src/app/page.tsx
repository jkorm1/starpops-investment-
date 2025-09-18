"use client";

import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import BusinessMetrics from "../components/BusinessMetrics";
import InvestmentWizard from "../components/InvestmentWizard";

import TermsSection from "../components/TermsSection";
import Footer from "../components/Footer";

export default function Home() {
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-animate");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("animate");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection onShowTerms={() => setShowTerms(true)} />
      <BusinessMetrics />
      <InvestmentWizard onShowTerms={() => setShowTerms(true)} />
      {showTerms && <TermsSection onClose={() => setShowTerms(false)} />}
      <Footer onShowTerms={() => setShowTerms(true)} />
    </main>
  );
}
