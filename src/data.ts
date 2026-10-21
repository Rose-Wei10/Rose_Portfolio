export const experiences = [
  {
    company: "MehtA+",
    role: "App Development Mentor",
    period: "May 2026 — Present",
    points: [
      "Mentor two students building VirusWatch, a React/Vite and JavaScript web app for the Congressional App Challenge; guide component design, symptom-selection workflows, and navigation.",
      "Help students set up GitHub and local development environments, structure symptom data and matching logic, and debug React state, imports, and frontend/backend integration issues.",
      "Guide Gemini API setup and validate a standalone Node.js API test; break development into weekly tasks and support implementation and troubleshooting.",
    ],
    tech: ["React", "Vite", "JavaScript", "Node.js", "Gemini API"],
  },
  {
    company: "TradingFlow",
    role: "Full Stack Intern",
    period: "July 2024 — July 2025",
    location: "Redmond, WA",
    points: [
      "Developed an options data platform with Next.js, React, and TypeScript, enabling users to visualize financial datasets and download data through backend APIs backed by ClickHouse.",
      "Integrated Stripe subscriptions and Clerk authentication with protected application routes to support paid access and user management.",
      "Optimized frontend rendering and backend queries to improve responsiveness when exploring large financial datasets.",
    ],
    tech: ["Next.js", "React", "TypeScript", "ClickHouse", "Stripe", "Clerk"],
  },
];
export interface Project {
  title: string;
  category: string;
  period: string;
  description: string;
  points: string[];
  tech: string[];
  image?: string;
  github?: string;
  demo?: string;
}
export const projects: Project[] = [
  {
    title: "Interview Tracker",
    category: "FULL STACK APPLICATION",
    period: "May 2026 — Present",
    description: "A central place to manage job applications and résumés.",
    points: [
      "Create, edit, delete, and track job applications through an Express API and PostgreSQL persistence with Prisma.",
      "Clerk authentication scopes application data to each user. AWS S3 supports résumé uploads, viewing, and deletion, with metadata in PostgreSQL.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Clerk",
      "AWS S3",
    ],
  },
  {
    title: "AI Weight Tracker App",
    category: "MOBILE & AI",
    period: "Mar 2026 — June 2026",
    description: "Bilingual weight and calorie tracking for iOS and web.",
    points: [
      "Firebase Authentication and Firestore synchronize user data across sessions.",
      "OpenRouter estimates calories and generates meal recommendations from natural-language food descriptions.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "OpenRouter API"],
    image: "/weight-tracker.webp",
    github: "https://github.com/Rose-Wei10/weight-tracker-app",
  },
  {
    title: "Academic World Dashboard",
    category: "DATA & VISUALIZATION",
    period: "June 2025 — Aug 2025",
    description:
      "Interactive research analytics across relational, document, and graph databases.",
    points: [
      "Faculty and publication search, rankings, and side-by-side university comparisons.",
      "MySQL, MongoDB, and Neo4j integrations with indexing and transactions to support research metrics and visualizations.",
    ],
    tech: ["Python", "Dash", "Plotly", "MySQL", "MongoDB", "Neo4j"],
    image: "/academic-dashboard.webp",
    github: "https://github.com/CS411DSO-SU25/RongWei",
    demo: "https://www.youtube.com/watch?v=n4ST6as_j3o",
  },
  {
    title: "Anniversary Report Tool",
    category: "GEOENGINEERS · CORPORATE ALLIANCE PROGRAM",
    period: "Sept 2023 — June 2024",
    description: "Employee milestone tracking and anniversary reporting.",
    points: [
      "Spreadsheet imports, employee search, and filtering backed by PostgreSQL.",
      "Deployed the full-stack application on AWS and developed Node.js notifications for anniversaries and milestones.",
    ],
    tech: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/anniversary-tool.webp",
  },
];
