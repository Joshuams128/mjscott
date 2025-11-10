"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react"; // hamburger icons

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      let closestSection = "home";
      let minDistance = Infinity;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const distance = Math.abs(element.getBoundingClientRect().top);
          if (distance < minDistance) {
            minDistance = distance;
            closestSection = section.id;
          }
        }
      });

      setActiveSection(closestSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-teal-300">
          JS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`transition-colors ${
                activeSection === section.id
                  ? "text-teal-300 font-semibold"
                  : "text-white/70 hover:text-teal-300"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white/80 hover:text-teal-300 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10 flex flex-col items-center gap-4 py-6"
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className={`text-lg transition-colors ${
                  activeSection === section.id
                    ? "text-teal-300 font-semibold"
                    : "text-white/80 hover:text-teal-300"
                }`}
              >
                {section.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
