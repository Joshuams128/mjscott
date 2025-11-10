"use client";
import { motion } from "framer-motion";
import SkillsMarquee from "./SkillsMarquee"; // ✅ import

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[#0b0b0b] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8"
      >
        <span className="text-teal-300">Education & Skills</span>
      </motion.h2>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-xl font-semibold text-white mb-2">Education</h3>
        <p className="text-white/60 text-sm md:text-base">
          Interactive Media Design — Web Development, Durham College
        </p>
      </motion.div>

      {/* ✅ Glowing infinite scroll marquee */}
      <SkillsMarquee />
    </section>
  );
}
