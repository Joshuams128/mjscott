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
  features: string[];
  challenges?: string[];
  outcomes?: string[];
  timeline?: string;
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
    tech: ["Webflow", "Custom CSS", "JavaScript", "Animation Libraries"],
    features: [
      "Responsive design optimized for all devices",
      "Interactive animations and transitions",
      "Integrated contact forms and CRM",
      "Resource library with filtering system",
      "Mentor connection platform"
    ],
    challenges: [
      "Creating smooth animations without impacting performance",
      "Implementing complex filtering logic in Webflow",
      "Ensuring brand consistency across all pages"
    ],
    outcomes: [
      "Increased user engagement by 45%",
      "Streamlined founder onboarding process",
      "Positive feedback from startup community"
    ],
    timeline: "3 months",
    role: "Lead Designer & Developer"
  },
  2: {
    id: 2,
    title: "Clayson Construction Services",
    desc: "Contracting website I worked on",
    fullDescription: "A professional contracting website built for Clayson Construction, showcasing their services, portfolio, and providing easy ways for clients to request quotes and contact the team.",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    category: "Web",
    tech: ["WordPress", "Custom CSS", "PHP", "Contact Form 7"],
    features: [
      "Project portfolio with before/after galleries",
      "Service pages with detailed descriptions",
      "Quote request system",
      "Mobile-responsive design",
      "SEO optimization"
    ],
    challenges: [
      "Organizing large image galleries efficiently",
      "Creating an intuitive quote request flow",
      "Balancing visual appeal with load times"
    ],
    outcomes: [
      "50% increase in quote requests",
      "Improved mobile user experience",
      "Enhanced brand credibility"
    ],
    timeline: "2 months",
    role: "Web Developer"
  },
  3: {
    id: 3,
    title: "Zero to Two",
    desc: "A GTM operating system for founders",
    fullDescription: "Zero to Two is a go-to-market (GTM) operating system designed specifically for startup founders, providing tools, frameworks, and strategies to successfully launch and scale their products.",
    link: "https://gozerototwo.com/",
    image: "/images/zero.png",
    category: "Web",
    tech: ["Webflow", "Custom Interactions", "Integrations", "Analytics"],
    features: [
      "Interactive GTM framework builder",
      "Resource library with templates",
      "Community features",
      "Analytics dashboard",
      "Email integration"
    ],
    timeline: "4 months",
    role: "Full Stack Designer"
  },
  4: {
    id: 4,
    title: "Build With Dream",
    desc: "A contractors showcase and contact website",
    fullDescription: "Build With Dream is a modern contractor showcase website built with Next.js and Tailwind CSS, featuring a clean design, project galleries, and streamlined contact forms for potential clients.",
    link: "https://buildwithdream.com/",
    image: "/images/dream.png",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "React", "Framer Motion"],
    features: [
      "Dynamic project showcase",
      "Smooth page transitions",
      "Contact form with validation",
      "Image optimization",
      "Fast page loads"
    ],
    timeline: "2 months",
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
    tech: ["WordPress", "WooCommerce", "Custom CSS", "Payment Gateways"],
    features: [
      "Product catalog with categories",
      "Shopping cart and checkout",
      "Order management system",
      "Custom cake request forms",
      "Mobile-friendly design"
    ],
    timeline: "3 months",
    role: "E-commerce Developer"
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
    features: [
      "Event calendar integration",
      "Sermon archive with search",
      "Community bulletin board",
      "Donation integration",
      "Mobile responsive"
    ],
    timeline: "2 months",
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
    tech: ["WordPress", "JavaScript", "CSS", "Booking System"],
    features: [
      "Service booking system",
      "Vendor directory",
      "Blog and resources",
      "User reviews and ratings",
      "Mobile app integration"
    ],
    timeline: "4 months",
    role: "Full Stack Developer"
  },
  8: {
    id: 8,
    title: "Susan Brown",
    desc: "Workshops That Build Confidence",
    fullDescription: "A professional website for Susan Brown's confidence-building workshops, featuring course information, booking systems, and testimonials.",
    link: "https://susanmbrown.com/",
    image: "/images/susanbrown.png",
    category: "Web",
    tech: ["WordPress", "JavaScript", "CSS", "Event Management"],
    features: [
      "Workshop calendar and booking",
      "Testimonial showcase",
      "Resource downloads",
      "Newsletter integration",
      "Video content"
    ],
    timeline: "2 months",
    role: "Web Designer & Developer"
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
    features: [
      "Movie database with search",
      "User reviews and ratings",
      "Character profiles",
      "Timeline visualization",
      "Admin panel"
    ],
    timeline: "3 months",
    role: "Full Stack Developer"
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
