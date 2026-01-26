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
  category: "Web";
  extra?: string;
  thumbnail?: string;
  preview?: string;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "Serene Pilates",
    desc: "Next.js, Tailwind CSS, React, Vercel",
    extra: "Transformed Figma design into a fully responsive website. Clean, minimal design focused on user experience and conversion.",
    link: "https://serene-pilates.vercel.app/",
    image: "/images/serene.png",
    thumbnail: "/images/serene.png",
    category: "Web",
    preview: "A modern pilates studio website bringing Figma designs to life with modern web technologies and optimized performance."
  },
  {
    id: 2,
    title: "TDChurch",
    desc: "Next.js, Tailwind CSS, React, Vercel, Sanity CMS",
    extra: "Optimized for SEO using Server Components and static generation. Empowered non-technical staff with headless CMS.",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    thumbnail: "/images/tdcimg.png",
    category: "Web",
    preview: "Centralized platform reducing communication gaps and enabling autonomous content management for church staff."
  },
  {
    id: 3,
    title: "Build With Dream",
    desc: "Next.js, Tailwind CSS, React, Framer Motion, Vercel",
    extra: "Optimized images with Next.js for fast loading. Static generation for instant page loads from search.",
    link: "https://buildwithdream.com/",
    image: "/images/dreamb.png",
    category: "Web",
    preview: "Transformed online presence to convert visitors into qualified leads through visual storytelling and streamlined contact flow."
  },
  {
    id: 4,
    title: "Susan Brown",
    desc: "Next.js, Tailwind CSS, Sanity",
    extra: "Headless CMS for autonomous schedule management. Social proof prioritized for conversion optimization.",
    link: "https://susanmbrown.com/",
    image: "/images/susan2.png",
    thumbnail: "/images/susan2.png",
    category: "Web",
    preview: "Streamlined booking flow that increased workshop conversions while reducing administrative overhead."
  },
  {
    id: 5,
    title: "Dena Startup Labs",
    desc: "Webflow",
    extra: "Webflow for rapid content iteration. Refined UI to project operational excellence to detail-oriented founders.",
    link: "https://www.denastartuplab.com/",
    image: "/images/dena.png",
    thumbnail: "/images/dena.png",
    category: "Web",
    preview: "Rebuilt brand credibility through visual consistency, reducing bounce rates and increasing program applications."
  },
  {
    id: 6,
    title: "Clayson Contstruction Services",
    desc: "WordPress, Custom CSS, HTML",
    extra: "Mobile-optimized for 70% mobile traffic. Information architecture restructured around customer needs.",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    thumbnail: "/images/clayson.png",
    category: "Web",
    preview: "Redesigned user flow to reduce bounce rates and improve lead quality through clearer service navigation."
  },
   {
    id: 7,
    title: "Zero to Two",
    desc: "Webflow",
    extra: "Complete brand rebuild with new logo. Performance optimization to signal operational excellence.",
    link: "https://gozerototwo.com/",
    image: "/images/zero.png",
    thumbnail: "/images/zero.png",
    category: "Web",
    preview: "Transformed brand positioning to align with premium GTM framework targeting experienced founders."
  },
  {
    id: 8,
    title: "Galore YYZ",
    desc: "Shopify, Liquid, CSS, JavaScript",
    extra: "Custom Liquid code for navigation product slider. Enhanced product display with custom image galleries.",
    link: "https://galoreyyz.com/",
    image: "/images/galore.png",
    thumbnail: "/images/galore.png",
    category: "Web",
    preview: "Developed custom Shopify features using Liquid to enhance product navigation and visual merchandising."
  },
  {
    id: 9,
    title: "Padies Cakes",
    desc: "WordPress, WooCommerce, Custom CSS",
    extra: "WooCommerce for proven payment processing. Visual-first galleries for emotional purchasing decisions.",
    link: "https://padiescakes.ca/",
    image: "/images/padiescakes.png",
    category: "Web",
    preview: "Enabled 24/7 ordering and freed baker from manual coordination to focus on product quality."
  },
  {
    id: 10,
    title: "Autodriva",
    desc: "WordPress, JavaScript, CSS, Booking System, Elementor",
    extra: "Real-time booking integration with provider calendars. Mobile-first for on-the-road service searches.",
    link: "https://autodriva.com/",
    image: "/images/autothumb.png",
    thumbnail: "/images/autothumb.png",
    category: "Web",
    preview: "Centralized platform reducing friction in finding trusted service providers and scheduling maintenance."
  }
];

export default function Portfolio() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const asset = (p: string) => `${basePath}${p.startsWith("/") ? p : `/${p}`}`;

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-teal-300">Client Work</span>
        </h2>
        <p className="text-white/60">Real-world solutions for real businesses.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {allProjects.map((project, i) => (
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

