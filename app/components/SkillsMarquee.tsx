"use client";
import { motion } from "framer-motion";
import { Figma, Code, Database, Box, Palette, Globe, Server, DatabaseBackup } from "lucide-react";
import { FaWordpress, FaShopify } from "react-icons/fa";
import { SiSquarespace } from "react-icons/si";

const skills = [
  { name: "WordPress", icon: FaWordpress },
  { name: "Shopify", icon: FaShopify },
  { name: "Squarespace", icon: SiSquarespace },
  { name: "React", icon: Code },
  { name: "Next.js", icon: Globe },
  { name: "TailwindCSS", icon: Palette },
  { name: "Figma", icon: Figma },
  { name: "UX/UI", icon: Box },
  { name: "Node.js", icon: Server },
  { name: "SQL", icon: Database },
  { name: "PHP", icon: DatabaseBackup },
  { name: "Three.js", icon: Code },
];

export default function SkillsMarquee() {
  return (
    <div className="relative w-full overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0b0b0b] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0b0b0b] to-transparent"></div>

      <motion.div
        className="flex gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 36, ease: "linear" }} // increased duration to slow the slide
      >
        {[...skills, ...skills].map((skill, i) => {
          const Icon = skill.icon;
          return (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(45,212,191,0.5)]"
            >
              <Icon className="w-6 h-6 text-teal-300" />
              <span className="text-teal-300 font-medium text-sm">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
