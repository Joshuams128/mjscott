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

  useEffect(() => {
    // Show name after brief delay
    const nameTimer = setTimeout(() => setShowName(true), 300);
    
    // Show "Portfolio" text
    const portfolioTimer = setTimeout(() => setShowPortfolio(true), 1200);
    
    // Hide intro and show main content
    const hideTimer = setTimeout(() => setShowIntro(false), 2800);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(portfolioTimer);
      clearTimeout(hideTimer);
    };
  }, []);

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

      <Header />
      <Hero />
      <Experience />
      <Portfolio />
      <Footer />
    </>
  );
}
