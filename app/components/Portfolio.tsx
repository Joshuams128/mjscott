"use client";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type ProjectType = "Full-Stack" | "Front-End";

type Project = {
  id: number;
  title: string;
  desc: string;
  link: string;
  image: string;
  category: "Web";
  type: ProjectType;
  extra?: string;
  thumbnail?: string;
  preview?: string;
  status?: "live" | "in-progress";
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "Serene Pilates",
    desc: "Next.js, TypeScript, Tailwind CSS, Vercel",
    extra: "API-driven contact flows. Branch preview environments and automated Vercel deploys.",
    link: "https://serene-pilates.vercel.app/",
    image: "/images/serene.png",
    thumbnail: "/images/serene.png",
    category: "Web",
    type: "Front-End",
    preview: "Performance-first responsive web app with API-driven contact flows, structured GitHub branching, and automated Vercel deployments with branch preview environments."
  },
  {
    id: 2,
    title: "TDC Church",
    desc: "Next.js, TypeScript, Tailwind CSS, Sanity CMS, Vercel",
    extra: "Structured content schema in Sanity. RESTful API integration with CI/CD via Vercel.",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    thumbnail: "/images/tdcimg.png",
    category: "Web",
    type: "Full-Stack",
    preview: "Headless CMS-driven church website allowing non-technical staff to manage sermons, events, and announcements independently."
  },
  {
    id: 3,
    title: "Build With Dream",
    desc: "Next.js, Tailwind CSS, React, Framer Motion, Vercel",
    extra: "Optimized images with Next.js for fast loading. Static generation for instant page loads from search.",
    link: "https://buildwithdream.com/",
    image: "/images/dreamb.png",
    category: "Web",
    type: "Front-End",
    preview: "Transformed online presence to convert visitors into qualified leads through visual storytelling and streamlined contact flow."
  },
  {
    id: 4,
    title: "Susan Brown",
    desc: "Next.js, Tailwind CSS, Sanity CMS",
    extra: "Headless CMS for autonomous schedule management. Social proof prioritized for conversion optimization.",
    link: "https://susanmbrown.com/",
    image: "/images/susan2.png",
    thumbnail: "/images/susan2.png",
    category: "Web",
    type: "Full-Stack",
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
    type: "Front-End",
    preview: "Rebuilt brand credibility through visual consistency, reducing bounce rates and increasing program applications."
  },
  {
    id: 6,
    title: "Clayson Construction Services",
    desc: "WordPress, Custom CSS, HTML",
    extra: "Mobile-optimized for 70% mobile traffic. Information architecture restructured around customer needs.",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    thumbnail: "/images/clayson.png",
    category: "Web",
    type: "Front-End",
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
    type: "Front-End",
    preview: "Transformed brand positioning to align with premium GTM framework targeting experienced founders."
  },
  {
    id: 9,
    title: "Padie's Cakes",
    desc: "Next.js, TypeScript, MongoDB/Mongoose, Sanity, NextAuth, Resend, Vercel",
    extra: "Custom order dashboard. Role-based auth via NextAuth. Mongoose order schemas. Resend for transactional email.",
    link: "https://padiescakes.ca/",
    image: "/images/padies.png",
    category: "Web",
    type: "Full-Stack",
    preview: "Full-stack bakery platform with custom order management dashboard, role-based authentication via NextAuth, transactional email via Resend, and a headless CMS for content. MongoDB handles order storage with Mongoose schemas. CI/CD via Vercel."
  },
  {
    id: 10,
    title: "AutoDriva",
    desc: "Next.js, TypeScript, MongoDB/Mongoose, NextAuth, Resend, Twilio, Square, Vercel",
    extra: "Square booking embed. Twilio SMS notifications. Mongo-backed user dashboard with NextAuth sessions.",
    link: "https://autodriva.com/",
    image: "/images/auto.png",
    thumbnail: "/images/auto.png",
    category: "Web",
    type: "Full-Stack",
    preview: "Full-stack automotive service platform with Square booking embed, SMS notifications via Twilio, transactional email via Resend, and a custom user dashboard backed by MongoDB. Includes NextAuth session management and full DNS/deployment pipeline on Vercel."
  },
  {
    id: 11,
    title: "Pilates Haus",
    desc: "Next.js, TypeScript, Tailwind CSS, WellnessLiving, Vercel",
    extra: "Third-party booking integration (WellnessLiving). Clean content architecture with automated CI/CD.",
    link: "https://pilateshaus.ca/",
    image: "/images/pilateshaus.png",
    category: "Web",
    type: "Front-End",
    preview: "Performance-first studio website with third-party booking system integration (WellnessLiving) and a clean content architecture. Deployed on Vercel with automated CI/CD."
  },
  {
    id: 12,
    title: "True North Party Rentals",
    desc: "Next.js, TypeScript, Tailwind CSS, Vercel",
    extra: "Fast load performance, responsive design, automated deployment pipeline.",
    link: "https://truenorthpartyrentals.com/",
    image: "/images/truenorthpartyrentals.png",
    category: "Web",
    type: "Front-End",
    preview: "Business website for a Durham Region party rental company with fast load performance, responsive design, and automated deployment pipeline."
  },
  {
    id: 13,
    title: "Pashion Pilates",
    desc: "Next.js, TypeScript, Contentful, Airtable, MemberSpace, Vimeo, Netlify",
    extra: "Contentful for content, Airtable for schedule data, MemberSpace for gating, Vimeo for video.",
    link: "https://www.pashionpilates.com/",
    image: "/images/pash.png",
    category: "Web",
    type: "Full-Stack",
    preview: "Feature-rich studio platform integrating Contentful for content management, Airtable for class/schedule data, MemberSpace for membership gating, and Vimeo for video delivery. Ongoing maintenance client."
  },
  {
    id: 15,
    title: "BulletproofK9s",
    desc: "Next.js, TypeScript, Tailwind CSS, Sanity, Google Places API, Vercel",
    extra: "Live Google Reviews via Places API. Dynamic service pages. Replaced an outdated WordPress site.",
    link: "https://bulletproofk9s.com/",
    image: "/images/bullet.png",
    category: "Web",
    type: "Full-Stack",
    preview: "Full-stack rebuild for Toronto & GTA's premier dog training facility. Live Google Reviews integration via Google Places API, dynamic service pages, and a dark tactical aesthetic — replacing a WordPress site with a performance-first Next.js architecture."
  },
  {
    id: 14,
    title: "LASCO Cayman",
    desc: "Next.js, TypeScript, Sanity, Clerk, Stripe, Vercel",
    extra: "Sanity product catalog, Clerk auth, Stripe Checkout. Full-stack e-commerce rebuild.",
    link: "#",
    image: "/images/lasco.png",
    category: "Web",
    type: "Full-Stack",
    status: "in-progress",
    preview: "Full-stack e-commerce rebuild for a Caribbean food distributor. Sanity CMS for product catalog, Clerk for authentication, and Stripe Checkout for payments."
  }
];

const filters = ["All", "Full-Stack", "Front-End"] as const;
type Filter = (typeof filters)[number];

export default function Portfolio() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const asset = (p: string) => `${basePath}${p.startsWith("/") ? p : `/${p}`}`;

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return allProjects;
    return allProjects.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          <span className="text-teal-300">Client Work</span>
        </h2>
        <p className="text-white/60">Full-stack applications and front-end builds for real businesses.</p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
        {filters.map((f) => {
          const isActive = activeFilter === f;
          const count =
            f === "All"
              ? allProjects.length
              : allProjects.filter((p) => p.type === f).length;
          return (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 sm:px-5 py-2 rounded-full text-sm font-medium border transition-all backdrop-blur-md ${
                isActive
                  ? "bg-teal-400/20 border-teal-300/60 text-teal-200 shadow-[0_0_15px_rgba(45,212,191,0.35)]"
                  : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {f} <span className="text-white/40 ml-1">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
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

                {/* Type badge */}
                <span
                  className={`absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase backdrop-blur-md border shadow-lg ${
                    project.type === "Full-Stack"
                      ? "bg-teal-500 border-teal-300 text-slate-950"
                      : "bg-slate-900/90 border-white/40 text-white"
                  }`}
                >
                  {project.type}
                </span>

                {/* In-progress badge */}
                {project.status === "in-progress" && (
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-amber-400 border border-amber-300 text-slate-950 shadow-lg">
                    In Progress
                  </span>
                )}

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
                      {project.link && project.link !== "#" ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white/10 hover:bg-white/20 text-white text-center py-2 px-4 rounded-lg text-sm font-semibold transition-colors border border-white/20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Live Site
                        </a>
                      ) : (
                        <span className="flex-1 bg-white/5 text-white/40 text-center py-2 px-4 rounded-lg text-sm font-semibold border border-white/10 cursor-not-allowed">
                          Coming Soon
                        </span>
                      )}
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
        </AnimatePresence>
      </div>
    </section>
  );
}
