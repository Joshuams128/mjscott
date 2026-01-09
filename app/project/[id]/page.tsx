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
  // Product-focused fields
  problem?: string;
  audience?: string;
  reasoning?: string;
  nextSteps?: string[];
};

const projectDetails: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "TDChurch",
    desc: "A modern church website",
fullDescription: "TDChurch needed a way to keep their growing congregation informed about service times, events, and sermons without relying on fragmented communication channels. I built a centralized hub that empowers church staff to manage content independently while providing members a clean, welcoming digital home.",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "React", "Vercel", "Sanity CMS"],
    problem: "The congregation lacked a centralized, up-to-date source for service times, events, and sermons, leading to communication gaps and missed opportunities for engagement.",
    audience: "Church members seeking service information and church staff needing an easy way to update content without technical dependencies.",
    reasoning: "Chose a headless CMS (Sanity) to give non-technical staff content autonomy. Used Next.js with static generation for fast page loads and better SEO, ensuring new members could easily discover the church online. Server Components reduced client-side JavaScript for older devices common in the congregation.",
    nextSteps: [
      "Add member login portal for small group management and personal giving history",
      "Implement push notifications for urgent prayer requests and event changes",
      "Integrate volunteer scheduling system to reduce administrative overhead"
    ],
    role: "Frontend Engineer"
  },
  2: {
    id: 2,
    title: "Build With Dream",
    desc: "A contractors showcase and contact website",
    fullDescription: "Local contractors were losing leads to competitors with better online presence. Build With Dream needed a website that built trust through showcasing past work while making it effortless for homeowners to request quotes—turning visitors into paying clients.",
    link: "https://buildwithdream.com/",
    image: "/images/dreamb.png",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
    problem: "The contractor was losing potential clients because their website didn't showcase their work effectively, and the quote request process was too complex, leading to high drop-off rates.",
    audience: "Homeowners searching for reliable contractors and comparing multiple options based on portfolio quality and ease of contact.",
    reasoning: "Implemented image optimization with Next.js Image component to ensure fast loading of high-quality project photos—critical for first impressions. Used Framer Motion for subtle animations that guide users toward the quote CTA without being distracting. Chose static generation for instant page loads, knowing that search traffic was the primary acquisition channel.",
    nextSteps: [
      "Add before/after image slider for project showcases to increase engagement",
      "Implement service area map to qualify leads geographically before contact",
      "Add estimated project timeline calculator to set realistic client expectations"
    ],
    role: "Frontend Engineer"
  },
  3: {
    id: 3,
    title: "Susan Brown",
    desc: "Workshops That Build Confidence",
    fullDescription: "Susan needed to convert workshop inquiries into bookings more efficiently. Her manual email process created friction for potential attendees and consumed hours of administrative time. I built a streamlined booking flow that increased conversion rates while reducing her workload.",
    link: "https://susanmbrown.com/",
    image: "/images/susan2.png",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "Sanity"],
    problem: "Potential workshop attendees were dropping off during the manual email inquiry process, while Susan spent excessive time coordinating bookings instead of delivering workshops.",
    audience: "Professionals and individuals seeking confidence-building training, who value social proof and need clear information before committing to a workshop.",
    reasoning: "Implemented a headless CMS for Susan to manage workshop schedules herself without developer intervention. Prioritized testimonials above the fold because social proof was the primary conversion driver in user research. Used date selection to reduce back-and-forth emails and qualify serious leads earlier in the funnel.",
    nextSteps: [
      "Add automated email sequences for workshop reminders and pre-work",
      "Implement waitlist functionality for sold-out workshops to capture future demand",
      "Add alumni portal for past participants to access bonus resources and increase lifetime value"
    ],
    role: "Frontend Engineer"
  },
  4: {
    id: 4,
    title: "Dena Startup Labs",
    desc: "Startup for founders",
    fullDescription: "The site had design inconsistencies that undermined credibility with founders—people who scrutinize details. I refined the UI to project professionalism while simplifying navigation, helping Dena Startup Labs position themselves as a trusted resource for entrepreneurs.",
    link: "https://www.denastartuplab.com/",
    image: "/images/dena.png",
    category: "Web",
    tech: ["Webflow"],
    problem: "Visual inconsistencies and cluttered layouts were damaging trust with the target audience of detail-oriented founders, increasing bounce rates and reducing program applications.",
    audience: "Early-stage startup founders evaluating whether to invest time and money in a startup accelerator program.",
    reasoning: "Chose Webflow to enable the team to iterate quickly on content without developer involvement—critical for a startup that needs to experiment with messaging. Prioritized visual consistency and clarity because founders make trust-based decisions, and poor design signals poor operational execution. Simplified navigation to reduce cognitive load for busy founders scanning the site.",
    nextSteps: [
      "Add founder testimonials with measurable outcomes (funding raised, users acquired) to increase credibility",
      "Implement cohort calendar showing program milestones to clarify value proposition",
      "Create resource library with gated content to build email list for nurture campaigns"
    ],
    role: "Product Designer"
  },
  5: {
    id: 5,
    title: "Clayson Construction Services",
    desc: "Contracting website redesign",
    fullDescription: "Clayson Construction had a confusing site structure that made it difficult for homeowners to find relevant services and request quotes. I redesigned the user flow to guide visitors from problem identification to quote request in fewer steps, reducing friction and increasing lead quality.",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    category: "Web",
    tech: ["WordPress", "Custom CSS", "HTML"],
    problem: "Potential customers were getting lost in the site trying to understand which services matched their needs, leading to high bounce rates and unqualified quote requests.",
    audience: "Homeowners and property managers searching for specific construction services who need to quickly assess capabilities and pricing.",
    reasoning: "Worked within WordPress constraints to minimize migration risk and preserve SEO equity. Restructured information architecture around customer jobs-to-be-done rather than internal service categories. Custom CSS ensured mobile responsiveness since analytics showed 70% mobile traffic—critical for on-site decision makers.",
    nextSteps: [
      "Add service-specific landing pages optimized for local SEO keywords",
      "Implement quote calculator for common projects to pre-qualify budget fit",
      "Create project timeline visualizations to manage customer expectations upfront"
    ],
    role: "Frontend Engineer"
  },
  6: {
    id: 6,
    title: "Zero to Two",
    desc: "A GTM operating system for founders",
fullDescription: "Zero to Two had a brand identity and site that didn't reflect the premium positioning of their GTM framework. I rebuilt the entire digital presence—from logo to site structure—to align with their target customer: experienced founders willing to pay for proven systems, not generic startup advice.",
    link: "https://gozerototwo.com/",
    image: "/images/zero.png",
    category: "Web",
    tech: ["Webflow"],
    problem: "The brand appeared generic and the site had technical issues that undermined credibility with experienced founders who expect polish and attention to detail.",
    audience: "Second-time founders and experienced operators launching new products who need battle-tested GTM frameworks, not beginner resources.",
    reasoning: "Complete rebuild was necessary because incremental fixes wouldn't address the positioning gap. Designed a new logo first to establish brand direction before touching the site. Used Webflow to enable rapid iteration on messaging with the founding team without deployment friction. Prioritized performance and alignment consistency to signal operational excellence—a key differentiator for the premium pricing.",
    nextSteps: [
      "Add interactive GTM framework preview to demonstrate value before purchase",
      "Implement founder case studies showing revenue outcomes to justify premium pricing",
      "Create tiered access model for community features to improve retention"
    ],
    role: "Product Designer & Engineer"
  },
  7: {
    id: 7,
    title: "Padies Cakes",
    desc: "Online storefront for a local baker",
    fullDescription: "A local baker was losing customers to competitors who offered online ordering. Padie needed an e-commerce site that showcased her custom cakes while handling orders and payments—freeing her to focus on baking instead of manual order coordination.",
    link: "https://padiescakes.ca/",
    image: "/images/padiescakes.png",
    category: "Web",
    tech: ["WordPress", "WooCommerce", "Custom CSS"],
    problem: "The bakery relied entirely on phone and text orders, limiting sales to business hours and creating administrative overhead that reduced time spent on actual baking and customer service.",
    audience: "Local customers planning events (birthdays, weddings) who need to browse designs and place orders outside traditional business hours.",
    reasoning: "Chose WooCommerce over custom solution to leverage proven payment processing and reduce maintenance burden for a small business. Optimized product galleries for visual appeal since cake purchasing is highly visual and emotional. Implemented local pickup option instead of shipping to match business model and maintain product quality.",
    nextSteps: [
      "Add custom cake design tool with real-time pricing to reduce quote turnaround time",
      "Implement SMS order confirmations and pickup reminders to reduce no-shows",
      "Create seasonal product promotions to drive repeat purchases during slower months"
    ],
    role: "E-commerce Developer"
  },
  8: {
    id: 8,
    title: "Autodriva",
    desc: "All-in-one automotive service platform",
    fullDescription: "Car owners were struggling to find reliable service providers and track maintenance schedules across multiple fragmented sources. Autodriva centralizes service discovery, booking, and maintenance tracking in one platform—reducing the friction of car ownership.",
    link: "https://autodriva.com/",
    image: "/images/autothumb.png",
    category: "Web",
    tech: ["WordPress", "JavaScript", "CSS", "Booking System", "Elementor"],
    problem: "Car owners lacked a centralized platform to discover trusted service providers, schedule maintenance, and track service history, leading to missed maintenance and poor provider choices.",
    audience: "Busy car owners who want reliable automotive service without spending hours researching providers and coordinating appointments.",
    reasoning: "Built on WordPress with Elementor to enable rapid iteration on service provider onboarding flows. Custom JavaScript booking system integrates with provider calendars to show real-time availability—reducing booking abandonment. Prioritized mobile experience since users often search for services while experiencing car issues on the road.",
    nextSteps: [
      "Add maintenance reminder notifications based on mileage and time intervals",
      "Implement provider rating system to build trust and improve quality",
      "Create service history export for vehicle resale value documentation"
    ],
    role: "Product Engineer"
  },
  9: {
    id: 9,
    title: "Mad Movies",
    desc: "Marvel movie database and community platform",
    fullDescription: "Built as a learning project to understand full-stack architecture, this Marvel movie database demonstrates how to structure a data-driven application with user-generated content. Taught me the fundamentals of database design, API creation, and state management.",
    link: "https://madmovies.mjscott.ca/#/home/",
    image: "/images/movies.png",
    category: "Experimental",
    tech: ["PHP", "HTML", "CSS", "SQL", "MySQL"],
    problem: "Needed to understand full-stack development principles and database relationships beyond frontend work, specifically how to handle user-generated content at scale.",
    audience: "Myself as a learning exercise, but designed for Marvel fans who want to track movies and share reviews.",
    reasoning: "Chose PHP and MySQL to learn server-side fundamentals without framework abstractions. Built custom SQL queries to deeply understand database optimization and N+1 query problems. Implemented user reviews to practice data validation and moderation patterns common in production apps.",
    nextSteps: [
      "Migrate to modern stack (Next.js + Postgres) to compare architectural patterns",
      "Add user authentication to practice secure session management",
      "Implement rate limiting on review submissions to learn about abuse prevention"
    ],
    role: "Full Stack Developer"
  },
  10: {
    id: 10,
    title: "Neon Maze",
    desc: "Interactive browser game with enemy AI",
    fullDescription: "Wanted to understand game physics and collision detection without relying on game engines. Neon Maze taught me how to implement game loops, manage state across frames, and optimize canvas rendering—skills that translate directly to building smooth UI animations in production apps.",
    link: "https://neonmaze.mjscott.ca/",
    image: "/images/neon.png",
    category: "Experimental",
    tech: ["JavaScript", "HTML5 Canvas", "CSS", "Game Physics"],
    problem: "Needed hands-on experience with animation loops, collision detection, and performance optimization for complex interactive UIs.",
    audience: "Learning project for myself, but accessible to anyone who enjoys casual browser games with keyboard controls.",
    reasoning: "Built with vanilla JavaScript and Canvas API to deeply understand rendering pipelines without framework magic. Implemented custom collision detection to learn spatial algorithms. Used requestAnimationFrame to practice performance optimization patterns that apply to any high-frequency UI updates.",
    nextSteps: [
      "Add difficulty progression system to learn about game balance and player retention",
      "Implement leaderboard with local storage to practice client-side data persistence",
      "Add procedural maze generation to understand algorithm complexity"
    ],
    role: "Game Developer"
  },
  11: {
    id: 11,
    title: "Panda Express",
    desc: "Interactive character with emotion states",
    fullDescription: "Built to master GSAP animation library before using it in client projects. Creating this interactive panda with emotional states taught me timeline coordination, easing functions, and how to make UI feel alive—skills I now use for microinteractions that improve product engagement.",
    link: "https://pandagame.mjscott.ca/",
    image: "/images/panda.png",
    category: "Experimental",
    tech: ["JavaScript", "GSAP", "HTML5", "CSS", "Animation"],
    problem: "Needed to understand advanced animation techniques and state management for interactive UI elements before implementing them in production environments.",
    audience: "Personal learning project, but designed to be engaging for anyone who appreciates character animation and interaction design.",
    reasoning: "Chose GSAP specifically because it's industry-standard for complex animations where CSS falls short. Built multiple emotional states to practice animation sequencing and state transitions. Used control panel interface to learn about coordinating UI controls with animation timelines—directly applicable to dashboard and admin interfaces.",
    nextSteps: [
      "Add sound effects triggered by animations to learn audio API integration",
      "Implement personality system that remembers user interactions to explore state persistence",
      "Create animation editor mode to understand tooling for content creators"
    ],
    role: "Animation Developer"
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
