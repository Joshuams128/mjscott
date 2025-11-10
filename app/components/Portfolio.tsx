"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  desc: string;
  link: string;
  image: string;
  category: "Web" | "Experimental";
  extra?: string;
  thumbnail?: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "TD Church",
    desc: "WordPress Church site with custom code for design.",
    extra: "WordPress, HTML, CSS",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    thumbnail: "/images/tdcimg.png",
    category: "Web",
  },
  {
    id: 2,
    title: "Autodriva",
    desc: "All-in-one automotive service site.",
    extra: "WordPress, JS, CSS",
    link: "https://autodriva.com/",
    image: "/images/autothumb.png",
    thumbnail: "/images/autothumb.png",
    category: "Web",
  },
  {
    id: 3,
    title: "Dream Contractors",
    desc: "Contracting showcase website.",
    extra: "SquareSpace, CSS",
    link: "https://www.dreamcontractorsinc.com/",
    image: "/images/dream.png",
    category: "Web",
  },
  {
    id: 4,
    title: "Padies Cakes",
    desc: "Online storefront for a baker.",
    extra: "Wordpress, CSS, WooCommerce",
    link: "https://store.padiescakes.ca/",
    image: "/images/padiescakes.png",
    category: "Web",
  },
  {
    id: 5,
    title: "Mad Movies",
    desc: "Imitation site for Marvel movies.",
    extra: "PHP, HTML, CSS, SQL",
    link: "https://madmovies.mjscott.ca/#/home/",
    image: "/images/movies.png",
    category: "Experimental",
  },
  {
    id: 6,
    title: "Neon Maze",
    desc: "Maze game project.",
    extra: "HTML, JS, CSS",
    link: "https://neonmaze.mjscott.ca/",
    image: "/images/neon.png",
    category: "Experimental",
  },
];

const categories = ["All", "Web", "Experimental"] as const;

export default function Portfolio() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const asset = (p: string) => `${basePath}${p.startsWith("/") ? p : `/${p}`}`;

  const [activeCategory, setActiveCategory] =
    useState<typeof categories[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 bg-[#0b0b0b] relative">
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
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative rounded-xl overflow-hidden cursor-pointer shadow-lg"
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

            {/* Overlay extra info — always visible on mobile */}
            <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center px-4 transition-opacity
                            opacity-100 sm:opacity-0 group-hover:opacity-100">
              <h3 className="text-xl font-semibold text-purple-400 mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm">{project.extra}</p>
              <span className="mt-4 inline-block text-sm text-teal-300">
                View Project →
              </span>
            </div>

            {/* Project Title & Short Desc */}
            <div className="absolute bottom-0 left-0 w-full bg-black/50 p-4 backdrop-blur-md">
              <h3 className="text-white font-semibold">{project.title}</h3>
              <p className="text-white/60 text-sm">{project.desc}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

