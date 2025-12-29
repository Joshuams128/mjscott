"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Portfolio";
import Portfolio from "./components/Experience";
import Footer from "./components/Footer";

export default function Page() {
  const [showIntro, setShowIntro] = useState(true);
  const [showName, setShowName] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    
    if (hasSeenIntro) {
      // Skip intro animation
      setShowIntro(false);
      setIntroComplete(true);
      return;
    }

    // Disable scrolling during intro
    document.body.style.overflow = 'hidden';

    // Show name after brief delay
    const nameTimer = setTimeout(() => setShowName(true), 300);
    
    // Show "Portfolio" text
    const portfolioTimer = setTimeout(() => setShowPortfolio(true), 1200);
    
    // Hide intro and show main content
    const hideTimer = setTimeout(() => {
      setShowIntro(false);
      setIntroComplete(true);
      sessionStorage.setItem("hasSeenIntro", "true");
      // Re-enable scrolling
      document.body.style.overflow = 'unset';
    }, 2800);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(portfolioTimer);
      clearTimeout(hideTimer);
      // Cleanup: ensure scrolling is re-enabled if component unmounts
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const scrolled = window.scrollY;
      const progress = Math.min(scrolled / documentHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate background colors based on scroll progress
  const getBackgroundColor = () => {
    if (scrollProgress < 0.25) {
      // Hero section: Blue-slate to deep blue
      const t = scrollProgress / 0.25;
      return `linear-gradient(to bottom, 
        rgb(${15 + t * 5}, ${23 - t * 10}, ${42 + t * 20}), 
        rgb(${10 - t * 3}, ${14 - t * 5}, ${26 + t * 10}))`;
    } else if (scrollProgress < 0.5) {
      // Projects section: Deep blue to purple-blue
      const t = (scrollProgress - 0.25) / 0.25;
      return `linear-gradient(to bottom, 
        rgb(${20 + t * 15}, ${13 + t * 5}, ${62 - t * 15}), 
        rgb(${7 + t * 8}, ${9 + t * 6}, ${36 + t * 10}))`;
    } else if (scrollProgress < 0.75) {
      // Experience section: Purple-blue to teal-dark
      const t = (scrollProgress - 0.5) / 0.25;
      return `linear-gradient(to bottom, 
        rgb(${35 - t * 20}, ${18 + t * 10}, ${47 - t * 25}), 
        rgb(${15 - t * 8}, ${15 + t * 15}, ${46 - t * 20}))`;
    } else {
      // Footer section: Teal-dark to deep slate
      const t = (scrollProgress - 0.75) / 0.25;
      return `linear-gradient(to bottom, 
        rgb(${15 - t * 5}, ${28 - t * 8}, ${22 + t * 10}), 
        rgb(${7 + t * 3}, ${20 - t * 5}, ${26 + t * 6}))`;
    }
  };

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0f172a]"
          >
            <div className="text-center">
              <AnimatePresence>
                {showName && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-teal-300 mb-4"
                  >
                    Joshua Scott
                  </motion.h1>
                )}
              </AnimatePresence>
              
              <AnimatePresence>
                {showPortfolio && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl text-white/70"
                  >
                    Portfolio
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated background wrapper */}
      <div
        className="fixed inset-0 -z-10 transition-all duration-700 ease-out"
        style={{
          background: getBackgroundColor(),
          opacity: introComplete ? 1 : 0,
        }}
      >
        {/* Radial gradient overlay for depth */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: `radial-gradient(circle at top, rgba(0,242,254,${0.08 - scrollProgress * 0.05}), transparent)`,
          }}
        />
      </div>

      <div style={{ opacity: introComplete ? 1 : 0, transition: 'opacity 0.3s' }}>
        <Header />
        <Hero />
        <Experience />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
