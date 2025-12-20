"use client";
import { motion } from "framer-motion";
import SkillsMarquee from "./SkillsMarquee";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "TDM Web Solutions",
    period: "Apr. 2025 - Jul. 2025",
    location: "Remote",
    responsibilities: [
      "Implemented modern front-end features using HTML, CSS (Sass), JavaScript, and React.js to enhance user experience",
      "Participated in client meetings to gather requirements and translate design mockups into functional interfaces",
      "Utilized version control (Git) and agile methodologies to support project development and deployment"
    ]
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "Jan. 2024 - Present",
    location: "Remote",
    responsibilities: [
      "Manage multiple client websites, delivering responsive, interactive, and visually engaging web solutions",
      "Communicate with clients to gather requirements, provide updates, and ensure satisfaction with final deliverables",
      "Demonstrate effective time management, problem-solving, and organizational skills while juggling multiple projects"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-16 text-center"
      >
        <span className="text-teal-300">Experience</span>
      </motion.h2>

      {/* Experience Timeline */}
      <div className="max-w-4xl mx-auto mb-20">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative pl-8 pb-12 border-l-2 border-teal-300/30 last:pb-0"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-teal-300 rounded-full shadow-lg shadow-teal-300/50" />
            
            {/* Content Card */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-teal-300 mb-2">{exp.role}</h3>
                  <p className="text-lg text-white/90 mb-3">{exp.company}</p>
                </div>
                <div className="flex flex-col gap-2 text-sm text-white/60">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-white/70">
                    <span className="text-teal-300 mt-1">▸</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Resume Download */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <a
          href="/images/Joshua_Scott_Resume.pdf"
          download
          className="inline-flex items-center gap-2 px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-teal-500/50"
        >
          <Briefcase size={20} />
          Download Full Resume
        </a>
      </motion.div>

      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto mb-16 text-center"
      >
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6">
          <h3 className="text-xl font-bold text-teal-300 mb-3">Education</h3>
          <p className="text-lg text-white mb-1">Durham College</p>
          <p className="text-white/70">Ontario College Diploma in Interactive Media Design — Web Development</p>
          <p className="text-white/50 text-sm mt-2">Jan. 2023 – Apr. 2025 | Oshawa, ON</p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold text-white mb-8 text-center">
          <span className="text-teal-300">Technical Skills</span>
        </h3>
        <SkillsMarquee />
      </motion.div>
    </section>
  );
}
