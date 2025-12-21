import ProjectDetailClient from "./ProjectDetailClient";

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

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Dena Startup Labs",
    desc: "Startup for founders",
    fullDescription: "Dena Startup Labs is a comprehensive platform designed to support founders in their entrepreneurial journey. The website serves as a hub for startup resources, mentorship connections, and community building.",
    link: "https://www.denastartuplab.com/",
    image: "/images/dena.png",
    category: "Web",
    tech: ["Webflow",],
    keyTasks: [
     "Resolved alignment inconsistencies throughout the site",
"Streamlined design for clarity and simplicity",
"Refined user interface to reduce visual clutter"
    ],
    role: "Web Designer"
  },
  2: {
    id: 2,
    title: "Clayson Construction Services",
    desc: "Contracting website I worked on",
    fullDescription: "A professional contracting website for Clayson Construction that I worked on. it showcases their services, portfolio, and provides easy ways for clients to request quotes and contact the team.",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    category: "Web",
    tech: ["WordPress", "Custom CSS" , "HTML"],
    keyTasks: [
      "Redesign multiple page layouts for improved usability",
"Streamline user flow for seamless navigation",
"Enhance overall site structure for intuitive interactions"
    ],
    role: "Web Developer"
  },
  3: {
    id: 3,
    title: "Zero to Two",
    desc: "A GTM operating system for founders",
fullDescription: "Zero to Two is a go-to-market (GTM) operating system designed specifically for startup founders, providing tools, frameworks, and strategies to successfully launch and scale their products.\n\nI rebuilt the site from the ground up, giving it a fresh look and feel. I also designed a new logo to establish a stronger, more cohesive brand identity.",
    link: "https://gozerototwo.com/",
    image: "/images/zero.png",
    category: "Web",
    tech: ["Webflow",],
     keyTasks: [
      "Rebuild site for improved performance and structure",
"Fix alignment issues across all pages",
"Customize site design and create a new logo"
    ],
    role: "Web Designer"
  },
  4: {
    id: 4,
    title: "Build With Dream",
    desc: "A contractors showcase and contact website",
    fullDescription: "Build With Dream is a modern contractor showcase website built with Next.js and Tailwind CSS, featuring a clean design, project galleries, and streamlined contact forms for potential clients.",
    link: "https://buildwithdream.com/",
    image: "/images/dream.png",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
    keyTasks: [
"Showcase services and project portfolio",
"Simplify quote request process for clients",
"Enable seamless client communication"
    ],
    role: "Frontend Developer"
  },
  5: {
    id: 5,
    title: "Padies Cakes",
    desc: "Online storefront for a baker",
    fullDescription: "An e-commerce website for Padies Cakes, a local bakery, featuring online ordering, product galleries, and integrated payment processing through WooCommerce.",
    link: "https://padiescakes.ca/",
    image: "/images/padiescakes.png",
    category: "Web",
    tech: ["WordPress", "WooCommerce", "Custom CSS"],
    keyTasks: [
"Enable online ordering for local customers",
"Display product galleries to showcase baked goods",
"Deliver secure checkout through WooCommerce"
    ],
    role: "Web Designer"
  },
  6: {
    id: 6,
    title: "TD Church",
    desc: "Church site with custom code for design",
    fullDescription: "A church website featuring event calendars, sermon archives, and community engagement tools, built with custom HTML/CSS on WordPress.",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    category: "Web",
    tech: ["WordPress", "HTML", "CSS", "JavaScript"],
    role: "Web Developer"
  },
  7: {
    id: 7,
    title: "Autodriva",
    desc: "All-in-one automotive service site",
    fullDescription: "Autodriva is a comprehensive automotive service platform connecting users with car services, maintenance scheduling, and automotive resources.",
    link: "https://autodriva.com/",
    image: "/images/autothumb.png",
    category: "Web",
    tech: ["WordPress", "JavaScript", "CSS", "Booking System", "Elementor"],
    keyTasks: [
"Connect users with car services and resources",
"Enable easy maintenance scheduling",
"Provide comprehensive automotive support"
    ],
    role: "Designer & Developer"
  },
  8: {
    id: 8,
    title: "Susan Brown",
    desc: "Workshops That Build Confidence",
    fullDescription: "A professional website for Susan Brown's confidence-building workshops, featuring workshop information, booking systems, and testimonials.",
    link: "https://susanmbrown.com/",
    image: "/images/susanbrown.png",
    category: "Web",
    tech: ["WordPress","Elementor"],
    role: "Web Designer"
  },
  9: {
    id: 9,
    title: "Mad Movies",
    desc: "Imitation site for Marvel movies",
    fullDescription: "A Marvel movie database and fan site built as an experimental project, featuring movie information, reviews, and a custom SQL database.",
    link: "https://madmovies.mjscott.ca/#/home/",
    image: "/images/movies.png",
    category: "Experimental",
    tech: ["PHP", "HTML", "CSS", "SQL", "MySQL"],
    role: "Full Stack Developer"
  },
  10: {
    id: 10,
    title: "Neon Maze",
    desc: "Interactive maze game with enemies",
    fullDescription: "Neon Maze is an interactive browser-based game where players navigate through a glowing neon maze while avoiding enemies. Built with vanilla JavaScript and HTML5 Canvas, it features smooth animations, collision detection, and engaging gameplay mechanics.",
    link: "https://neonmaze.mjscott.ca/",
    image: "/images/neon.png",
    category: "Experimental",
    tech: ["JavaScript", "HTML5 Canvas", "CSS", "Game Physics"],
    keyTasks: [
      "Successfully created engaging gameplay loop",
      "Gained experience in game development concepts"
    ],
    role: "Game Developer"
  },
  11: {
    id: 11,
    title: "Panda Express",
    desc: "Interactive panda game with GSAP animations",
    fullDescription: "Panda Express is an interactive browser-based game featuring a cute panda character with various emotional states. Designed from scratch and built with GSAP (GreenSock Animation Platform) for smooth, professional animations. The game includes a control panel to trigger different panda states and interactions.",
    link: "https://pandagame.mjscott.ca/",
    image: "/images/panda.png",
    category: "Experimental",
    tech: ["JavaScript", "GSAP", "HTML5", "CSS", "Animation"],
    keyTasks: [
      "Successfully created engaging interactive character",
      "Mastered GSAP animation library",
      "Developed unique game concept with personality"
    ],
    role: "Game Designer & Developer"
  }
};

export function generateStaticParams() {
  return Object.keys(projectDetails).map((id) => ({
    id: id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const projectId = parseInt(id);
  const project = projectDetails[projectId] || null;

  return <ProjectDetailClient project={project} />;
}
