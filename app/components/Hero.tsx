"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const titles = ["Frontend Developer", "UX/UI Designer", "Problem Solver"];
  const [currentTitle, setCurrentTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const speed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      setCurrentTitle(
        deleting
          ? titles[index].substring(0, subIndex - 1)
          : titles[index].substring(0, subIndex + 1)
      );
      setSubIndex(subIndex + (deleting ? -1 : 1));

      if (!deleting && subIndex === titles[index].length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 pt-20 sm:pt-0"
    >
      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg"
      >
        Hey, I&apos;m <span className="text-teal-300">Joshua</span>  
      </motion.h1>

<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-teal-300 min-h-[2.5rem]"
>
  I&apos;m a{" "}
  <span className="text-teal-300">
    {currentTitle}
  </span>
  <span className="animate-pulse text-teal-200">|</span>
</motion.h2>


    {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-4 text-base sm:text-lg text-white/70 max-w-2xl"
      >
        I build modern, high-performance websites for clients using React, Next.js, Sanity CMS, WordPress, and Shopify. I focus on creating sites that are fast, easy for clients to manage, and designed to convert visitors into customers.
      </motion.p>


      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8 flex flex-col sm:flex-row gap-4"
      >
        {/* Resume Button */}
        <a
          href= "/images/Joshua_Scott_Resume.pdf" // <- put your actual resume file in /public
          download
          className="px-6 py-3 bg-teal-400/20 border border-teal-300/40 rounded-xl text-teal-300 hover:bg-teal-400/30 transition-all backdrop-blur-md text-sm sm:text-base"
        >
         Resume
        </a>

        {/* View Work Button */}
        <a
          href="#projects"
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white backdrop-blur-md hover:bg-white/20 transition-all text-sm sm:text-base"
        >
          View My Work ↓
        </a>
      </motion.div>

      {/* LinkedIn Icon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="mt-6"
      >
        <a
          href="https://linkedin.com/in/mjoshscott"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center w-12 h-12 bg-teal-400/20 border border-teal-300/40 rounded-full text-teal-300 hover:bg-teal-400/30 hover:scale-110 transition-all backdrop-blur-md"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
      </motion.div>
    </section>
  );
}
