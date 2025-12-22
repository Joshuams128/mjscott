"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { link } from "fs/promises";

type Project = {
  id: number;
  title: string;
  desc: string;
  link: string;
  image: string;
  category: "Web" | "Experimental";
  extra?: string;
  thumbnail?: string;
  preview?: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "TD Church",
    desc: "A modern church website",
    extra: "Next.js, Tailwind CSS, React, Vercel, Sanity CMS",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    thumbnail: "/images/tdcimg.png",
    category: "Web",
    preview: "Church website with event calendar and sermon archives."
  },
  {
    id: 2,
    title: "Build With Dream",
    desc: " A contractors showcase and contact website.",
    extra: "Next.js, Tailwind CSS, Vercel",
    link: "https://buildwithdream.com/",
    image: "/images/dream.png",
    category: "Web",
    preview: "Modern contractor showcase built with Next.js and smooth animations."
  },
  {
    id: 3,
    title: "Dena Startup Labs",
    desc: "Startup for founders",
    extra: "Webflow",
    link: "https://www.denastartuplab.com/",
    image: "/images/dena.png",
    thumbnail: "/images/dena.png",
    category: "Web",
    preview: "A comprehensive platform for startup founders with resources and mentorship."
  },
  {
    id: 4,
    title: "Clayson Contstruction Services",
    desc: " Contracting website I worked on.",
    extra: "WordPress, CSS",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    thumbnail: "/images/clayson.png",
    category: "Web",
    preview: "Professional contracting website with project galleries and quote system."
  },
   {
    id: 5,
    title: "Zero to Two",
    desc: " A GTM operating system for founders.",
    extra: "Webflow",
    link: "https://gozerototwo.com/",
    image: "/images/zero.png",
    thumbnail: "/images/zero.png",
    category: "Web",
    preview: "Go-to-market operating system with tools and frameworks for startups."
  },
  {
    id: 6,
    title: "Padies Cakes",
    desc: "Online storefront for a baker.",
    extra: "Wordpress, CSS, WooCommerce",
    link: "https://padiescakes.ca/",
    image: "/images/padiescakes.png",
    category: "Web",
    preview: "E-commerce website for local bakery with online ordering system."
  },
  {
    id: 7,
    title: "Autodriva",
    desc: "All-in-one automotive service site.",
    extra: "WordPress, JS, CSS",
    link: "https://autodriva.com/",
    image: "/images/autothumb.png",
    thumbnail: "/images/autothumb.png",
    category: "Web",
    preview: "Comprehensive automotive service platform with booking system."
  },
  {
    id: 8,
    title: "Susan Brown",
    desc: "Workshops That Build Confidence",
    extra: "WordPress, JS, CSS",
    link: "https://susanmbrown.com/",
    image: "/images/susanbrown.png",
    thumbnail: "/images/susanbrown.png",
    category: "Web",
    preview: "Professional workshop website with booking and testimonials."
  },
  {
    id: 9,
    title: "Mad Movies",
    desc: "Imitation site for Marvel movies.",
    extra: "PHP, HTML, CSS, SQL",
    link: "https://madmovies.mjscott.ca/#/home/",
    image: "/images/movies.png",
    category: "Experimental",
    preview: "Marvel movie database with custom SQL backend and user reviews."
  },
  {
    id: 10,
    title: "Neon Maze",
    desc: "Interactive maze game with enemies.",
    extra: "JavaScript, Canvas, Game Development",
    link: "https://neonmaze.mjscott.ca/",
    image: "/images/neon.png",
    thumbnail: "/images/neon.png",
    category: "Experimental",
    preview: "Neon-themed maze game with arrow key controls, enemies, and collectible targets."
  },
  {
    id: 11,
    title: "Panda Express",
    desc: "Interactive panda game with GSAP animations.",
    extra: "JavaScript, GSAP, Game Development",
    link: "https://pandagame.mjscott.ca/",
    image: "/images/panda.png",
    thumbnail: "/images/panda.png",
    category: "Experimental",
    preview: "A panda game designed from scratch with smooth GSAP animations and interactive controls."
  },
  
];

const categories = ["All", "Web", "Experimental"] as const;

export default function Portfolio() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const asset = (p: string) => `${basePath}${p.startsWith("/") ? p : `/${p}`}`;

  const [activeCategory, setActiveCategory] =
    useState<typeof categories[number]>("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-teal-300">Featured Projects</span>
        </h2>
        <p className="text-white/60">Filter and explore my latest work.</p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center gap-6 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium transition
              ${
                activeCategory === cat
                  ? "bg-purple-500 text-white shadow-lg"
                  : "bg-white/5 text-white/60 hover:bg-white/10"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg"
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {/* Image Thumbnail with subtle zoom */}
            <div className="overflow-hidden rounded-xl relative">
              <img
                src={asset(project.image)}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-64 md:h-72 lg:h-80 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {/* Small hover thumbnail */}
              {project.thumbnail && (
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-2 right-2 w-16 h-16 rounded-lg border-2 border-white/30 overflow-hidden opacity-0 group-hover:opacity-100 shadow-lg"
                >
                  <img
                    src={asset(project.thumbnail)}
                    alt={`${project.title} thumbnail`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              )}
            </div>

            {/* Hover Popup Preview */}
            <AnimatePresence>
              {hoveredProject === project.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent flex flex-col justify-end p-6 z-10"
                >
                  <h3 className="text-2xl font-bold text-teal-300 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm mb-3 line-clamp-2">
                    {project.preview}
                  </p>
                  <p className="text-teal-300/80 text-xs mb-4">{project.extra}</p>
                  <div className="flex gap-3">
                    <Link
                      href={`/project/${project.id}`}
                      className="flex-1 bg-teal-500 hover:bg-teal-600 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </Link>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors border border-white/20"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Live Site
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Overlay extra info — always visible on mobile */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 transition-opacity
                            opacity-100 sm:opacity-0 group-hover:opacity-100 pointer-events-none sm:pointer-events-auto">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.extra}</p>
              <span className="mt-4 inline-block text-sm text-teal-300">
                Hover for more →
              </span>
            </div>

            {/* Project Title & Short Desc */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 backdrop-blur-md">
              <h3 className="text-white font-semibold">{project.title}</h3>
              <p className="text-white/60 text-sm">{project.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

