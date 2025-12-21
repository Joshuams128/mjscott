"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";

type ProjectDetail = {
  id: number;
  title: string;
  desc: string;
  fullDescription: string;
  link: string;
  image: string;
  category: "Web" | "Experimental";
  tech: string[];
  keyTasks?: string[];
  role?: string;
};

interface ProjectDetailClientProps {
  project: ProjectDetail | null;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const router = useRouter();

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => router.push("/")}
            className="text-teal-300 hover:underline"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a]">
      {/* Back Button */}
      <motion.button
        onClick={() => router.push("/#projects")}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-white/80 hover:text-teal-300 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Projects</span>
      </motion.button>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative pt-32 pb-16 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-white/70 mb-6">{project.desc}</p>
            <div className="flex justify-center gap-4 flex-wrap">
              <span className="px-4 py-2 bg-teal-500/20 text-teal-300 rounded-full text-sm">
                {project.category}
              </span>
              {project.role && (
                <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                  {project.role}
                </span>
              )}
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-2xl mb-16"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-teal-300 mb-4">Overview</h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  {project.fullDescription}
                </p>
              </motion.div>

              {/* Key Tasks */}
              {project.keyTasks && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold text-teal-300 mb-4">Key Tasks</h2>
                  <ul className="space-y-3">
                    {project.keyTasks.map((keyTask, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-teal-300 mt-1">★</span>
                        <span className="text-white/80">{keyTask}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Live Project Link */}
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-4 px-6 rounded-xl text-center transition-colors shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  View Live Project
                  <ExternalLink size={18} />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
