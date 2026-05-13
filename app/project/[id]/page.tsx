import ProjectDetailClient from "./ProjectDetailClient";

type ProjectDetail = {
  id: number;
  title: string;
  desc: string;
  fullDescription: string;
  link: string;
  image: string;
  category: "Web";
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
    title: "Serene Pilates",
    desc: "Next.js, TypeScript, Tailwind CSS, Vercel",
    fullDescription: "A performance-first marketing site for a pilates studio, built with Next.js and TypeScript. Includes API-driven contact flows, structured GitHub branching with preview environments per branch, and automated Vercel deployments.",
    link: "https://serene-pilates.vercel.app/",
    image: "/images/serene.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "GitHub Actions"],
    problem: "The studio needed a polished, fast-loading marketing site that could turn over quickly and stay maintainable, while supporting iterative design changes without breaking production.",
    audience: "Local community members searching for pilates classes — first impressions on mobile are decisive.",
    reasoning: "Chose Next.js with TypeScript for type safety and Server Components to minimize JS sent to the client. Set up branch preview deployments on Vercel so design tweaks could be reviewed in isolation before merging to main. Contact submissions go through a Next.js API route for validation before being relayed.",
    role: "Full-Stack Developer"
  },
  2: {
    id: 2,
    title: "TDC Church",
    desc: "Next.js, TypeScript, Tailwind CSS, Sanity CMS, Vercel",
    fullDescription: "A headless CMS-driven website that lets non-technical church staff manage sermons, events, and announcements independently. Content schema modeled in Sanity, fetched server-side with revalidation, and deployed with CI/CD on Vercel.",
    link: "https://tdchurch.ca/",
    image: "/images/tdcimg.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Vercel"],
    problem: "Staff couldn't update service times, sermons, or events without a developer in the loop. Communication gaps with the congregation were growing.",
    audience: "Church members looking for service times, sermons, and events — plus non-technical staff who need to publish content without writing code.",
    reasoning: "Modeled the content schema in Sanity with references between sermons, series, and speakers so editors only enter data once. Used Next.js Server Components and on-demand revalidation so newly published content appears without a redeploy. Vercel handles CI/CD on every push.",
    role: "Full-Stack Developer"
  },
  3: {
    id: 3,
    title: "Build With Dream",
    desc: "Next.js, Tailwind CSS, React, Framer Motion, Vercel",
    fullDescription: "Local contractors were losing leads to competitors with better online presence. Build With Dream needed a website that built trust through showcasing past work while making it effortless for homeowners to request quotes—turning visitors into paying clients.",
    link: "https://buildwithdream.com/",
    image: "/images/dreamb.png",
    category: "Web",
    tech: ["Next.js", "Tailwind CSS", "React", "Framer Motion", "Vercel"],
    problem: "The contractor was losing potential clients because their website didn't showcase their work effectively, and the quote request process was too complex, leading to high drop-off rates.",
    audience: "Homeowners searching for reliable contractors and comparing multiple options based on portfolio quality and ease of contact.",
    reasoning: "Implemented image optimization with Next.js Image component to ensure fast loading of high-quality project photos—critical for first impressions. Used Framer Motion for subtle animations that guide users toward the quote CTA without being distracting. Chose static generation for instant page loads, knowing that search traffic was the primary acquisition channel.",
    role: "Front-End Developer"
  },
  4: {
    id: 4,
    title: "Susan Brown",
    desc: "Next.js, Tailwind CSS, Sanity CMS",
    fullDescription: "Susan needed to convert workshop inquiries into bookings more efficiently. Her manual email process created friction for potential attendees and consumed hours of administrative time. I built a streamlined booking flow backed by Sanity for content and an API-driven inquiry pipeline.",
    link: "https://susanmbrown.com/",
    image: "/images/susan2.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS"],
    problem: "Potential workshop attendees were dropping off during the manual email inquiry process, while Susan spent excessive time coordinating bookings instead of delivering workshops.",
    audience: "Professionals and individuals seeking confidence-building training, who value social proof and need clear information before committing to a workshop.",
    reasoning: "Modeled workshops and testimonials in Sanity so Susan could publish updates without developer involvement. Inquiry form submits to a Next.js API route that validates payloads server-side before notifying her — reducing spam and qualifying leads earlier.",
    role: "Full-Stack Developer"
  },
  5: {
    id: 5,
    title: "Dena Startup Labs",
    desc: "Webflow",
    fullDescription: "The site had design inconsistencies that undermined credibility with founders—people who scrutinize details. I refined the UI to project professionalism while simplifying navigation, helping Dena Startup Labs position themselves as a trusted resource for entrepreneurs.",
    link: "https://www.denastartuplab.com/",
    image: "/images/dena.png",
    category: "Web",
    tech: ["Webflow"],
    problem: "Visual inconsistencies and cluttered layouts were damaging trust with the target audience of detail-oriented founders, increasing bounce rates and reducing program applications.",
    audience: "Early-stage startup founders evaluating whether to invest time and money in a startup accelerator program.",
    reasoning: "Chose Webflow to enable the team to iterate quickly on content without developer involvement—critical for a startup that needs to experiment with messaging. Prioritized visual consistency and clarity because founders make trust-based decisions, and poor design signals poor operational execution. Simplified navigation to reduce cognitive load for busy founders scanning the site.",
    role: "Product Designer"
  },
  6: {
    id: 6,
    title: "Clayson Construction Services",
    desc: "WordPress, Custom CSS, HTML",
    fullDescription: "Clayson Construction had a confusing site structure that made it difficult for homeowners to find relevant services and request quotes. I redesigned the user flow to guide visitors from problem identification to quote request in fewer steps, reducing friction and increasing lead quality.",
    link: "https://claysonconstruction.com/",
    image: "/images/clayson.png",
    category: "Web",
    tech: ["WordPress", "Custom CSS", "HTML"],
    problem: "Potential customers were getting lost in the site trying to understand which services matched their needs, leading to high bounce rates and unqualified quote requests.",
    audience: "Homeowners and property managers searching for specific construction services who need to quickly assess capabilities and pricing.",
    reasoning: "Worked within WordPress constraints to minimize migration risk and preserve SEO equity. Restructured information architecture around customer jobs-to-be-done rather than internal service categories. Custom CSS ensured mobile responsiveness since analytics showed 70% mobile traffic—critical for on-site decision makers.",
    role: "Web Developer"
  },
  7: {
    id: 7,
    title: "Zero to Two",
    desc: "Webflow",
    fullDescription: "Zero to Two had a brand identity and site that didn't reflect the premium positioning of their GTM framework. I rebuilt the entire digital presence—from logo to site structure—to align with their target customer: experienced founders willing to pay for proven systems, not generic startup advice.",
    link: "https://gozerototwo.com/",
    image: "/images/zero.png",
    category: "Web",
    tech: ["Webflow"],
    problem: "The brand appeared generic and the site had technical issues that undermined credibility with experienced founders who expect polish and attention to detail.",
    audience: "Second-time founders and experienced operators launching new products who need battle-tested GTM frameworks, not beginner resources.",
    reasoning: "Complete rebuild was necessary because incremental fixes wouldn't address the positioning gap. Designed a new logo first to establish brand direction before touching the site. Used Webflow to enable rapid iteration on messaging with the founding team without deployment friction. Prioritized performance and alignment consistency to signal operational excellence—a key differentiator for the premium pricing.",
    role: "Web Developer"
  },
  9: {
    id: 9,
    title: "Padie's Cakes",
    desc: "Next.js, TypeScript, MongoDB/Mongoose, Sanity, NextAuth, Resend, Vercel",
    fullDescription: "A full-stack bakery platform with a custom order management dashboard, role-based authentication, transactional email, and a headless CMS. Orders persist to MongoDB through Mongoose schemas; staff manage them through an authenticated dashboard. Content (cake gallery, pricing, FAQs) is editable through Sanity.",
    link: "https://padiescakes.ca/",
    image: "/images/padies.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "Sanity CMS", "NextAuth", "Resend", "Vercel"],
    problem: "The bakery relied entirely on phone and text orders, limiting sales to business hours and burying the owner in manual coordination. A WordPress/WooCommerce setup didn't give her the visibility into orders or the editorial control she needed.",
    audience: "Local customers placing custom cake orders for birthdays, weddings, and events — plus the bakery owner, who needed a dashboard to manage incoming orders without technical help.",
    reasoning: "Built the order model in MongoDB with Mongoose schemas validating status, fulfillment date, and customer details before save. NextAuth handles role-based access so only staff see the admin dashboard. Resend sends transactional confirmation and status-update emails through a typed server action. Sanity handles editorial content separately so updates to the gallery don't require redeploys. Deployed on Vercel with CI/CD on every push.",
    role: "Full-Stack Developer"
  },
  10: {
    id: 10,
    title: "AutoDriva",
    desc: "Next.js, TypeScript, MongoDB/Mongoose, NextAuth, Resend, Twilio, Square, Vercel",
    fullDescription: "A full-stack automotive service platform. Customers book through an embedded Square flow; SMS confirmations and reminders go out via Twilio; email confirmations via Resend. Authenticated users see their service history through a dashboard backed by MongoDB and Mongoose. NextAuth handles session management across the app.",
    link: "https://autodriva.com/",
    image: "/images/auto.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Mongoose", "NextAuth", "Twilio", "Square", "Resend", "Vercel"],
    problem: "Customers were stitching together booking, payment, and reminders across multiple tools — leading to missed appointments and no-shows. The shop needed one platform for discovery, booking, and ongoing customer communication.",
    audience: "Car owners who want a frictionless way to book service and get clear reminders, plus the shop owner who needs visibility into upcoming appointments.",
    reasoning: "Square handles payment and the booking embed so the shop can keep its existing merchant relationship. Twilio sends SMS confirmations and 24-hour reminders to cut no-shows; Resend handles the email side. Authenticated user dashboards (NextAuth + Mongo) let returning customers see service history without re-entering details. The full deployment pipeline — DNS, env vars, preview branches — runs through Vercel.",
    role: "Full-Stack Developer"
  },
  11: {
    id: 11,
    title: "Pilates Haus",
    desc: "Next.js, TypeScript, Tailwind CSS, WellnessLiving, Vercel",
    fullDescription: "A performance-first studio website with a third-party booking system (WellnessLiving) embedded into the class schedule flow. Clean content architecture, mobile-first design, and automated CI/CD via Vercel.",
    link: "https://pilateshaus.ca/",
    image: "/images/pilateshaus.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "WellnessLiving", "Vercel"],
    problem: "The studio needed a marketing site that integrated cleanly with its existing WellnessLiving booking system instead of redirecting users away mid-flow.",
    audience: "Members and prospects looking up class schedules, pricing, and the studio's approach — most often on mobile.",
    reasoning: "Embedded the WellnessLiving widget where users expect it, with surrounding content built in Next.js for fast page loads. Tailwind keeps the design system consistent; Vercel handles CI/CD on every push.",
    role: "Front-End Developer"
  },
  12: {
    id: 12,
    title: "True North Party Rentals",
    desc: "Next.js, TypeScript, Tailwind CSS, Vercel",
    fullDescription: "A business website for a Durham Region party rental company. Optimized for fast load on mobile, with a responsive design and automated deployment pipeline on Vercel.",
    link: "https://truenorthpartyrentals.com/",
    image: "/images/truenorthpartyrentals.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    problem: "The rental company was relying on social DMs for quote requests, with no central place for customers to browse inventory or reach out.",
    audience: "Event planners and homeowners booking party rentals — often comparing options on mobile during planning.",
    reasoning: "Built in Next.js for fast page loads and SEO discoverability. Vercel CI/CD means content updates deploy in seconds. Contact submissions go through a Next.js API route for validation and routing.",
    role: "Full-Stack Developer"
  },
  13: {
    id: 13,
    title: "Pashion Pilates",
    desc: "Next.js, TypeScript, Contentful, Airtable, MemberSpace, Vimeo, Netlify",
    fullDescription: "A feature-rich studio platform integrating multiple services: Contentful for editorial content, Airtable as a no-code data source for class schedules, MemberSpace for membership gating, and Vimeo for video delivery. Ongoing maintenance client.",
    link: "https://www.pashionpilates.com/",
    image: "/images/pash.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Contentful", "Airtable", "MemberSpace", "Vimeo", "Netlify"],
    problem: "Schedule and content lived in tools the studio team already used (Airtable, Contentful), but visitors had no single member-gated home for video classes and updates.",
    audience: "Studio members accessing on-demand video content and class schedules, plus the studio team who manage everything from existing tools.",
    reasoning: "Integrated Contentful for editorial pages and Airtable as a class/schedule source so the studio could keep its existing workflow. MemberSpace gates premium content without building auth from scratch. Vimeo handles video hosting with adaptive streaming. Deployed on Netlify with continuous builds.",
    role: "Full-Stack Developer"
  },
  15: {
    id: 15,
    title: "BulletproofK9s",
    desc: "Next.js, TypeScript, Tailwind CSS, Sanity, Google Places API, Vercel",
    fullDescription: "A full-stack rebuild of the website for Toronto & GTA's premier dog training facility. Replaced an outdated WordPress install with a performance-first Next.js architecture. Service pages are dynamic, content is editable through Sanity, and a Google Places API integration pulls live reviews into the homepage. Deployed on Vercel with automated CI/CD.",
    link: "https://bulletproofk9s.com/",
    image: "/images/bullet.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Google Places API", "Vercel"],
    problem: "The existing WordPress site was slow, hard to update, and didn't reflect the brand. Reviews were stale, service pages were copy-pasted, and the owner had no easy way to update content without breaking the layout.",
    audience: "Dog owners in Toronto and the GTA researching trainers — a decision driven heavily by trust signals (reviews, before/after stories) and presentation.",
    reasoning: "Modeled services and testimonials in Sanity so the owner can publish new programs without touching code. Built a server-side integration with the Google Places API to fetch and cache live reviews on each ISR revalidation — reviews stay fresh without hammering the API. Service pages render dynamically from Sanity content so adding a new program is a single CMS entry. Tactical dark aesthetic in Tailwind matches the brand. Deployed on Vercel with preview branches per PR.",
    role: "Full-Stack Developer"
  },
  14: {
    id: 14,
    title: "LASCO Cayman",
    desc: "Next.js, TypeScript, Sanity, Clerk, Stripe, Vercel",
    fullDescription: "An in-progress full-stack e-commerce rebuild for a Caribbean food distributor. Product catalog modeled in Sanity, authentication handled by Clerk, and payments processed through Stripe Checkout. Currently in active development.",
    link: "#",
    image: "/images/lasco.png",
    category: "Web",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Sanity CMS", "Clerk", "Stripe", "Vercel"],
    problem: "The distributor's existing online presence didn't support ordering — wholesale and retail customers had to place orders manually. A modern storefront with proper auth and payment was the missing piece.",
    audience: "Wholesale buyers and retail customers placing recurring food orders, plus the LASCO team managing product data through a CMS.",
    reasoning: "Sanity models the product catalog with variants, categories, and regional availability. Clerk replaces hand-rolled auth and gives wholesale users their own portal. Stripe Checkout handles compliance-heavy payment flows so the team doesn't carry that risk. Vercel deploys preview environments per branch.",
    role: "Full-Stack Developer"
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
