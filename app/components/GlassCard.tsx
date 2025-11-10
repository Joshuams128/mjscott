"use client";
import { motion } from "framer-motion";
import React from "react";

export default function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-6 hover:border-white/30 hover:shadow-2xl transition-all"
    >
      {children}
    </motion.div>
  );
}
