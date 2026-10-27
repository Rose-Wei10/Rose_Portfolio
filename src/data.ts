export const experiences = [
  {
    company: "MehtA+",
    role: "App Development Mentor (Contract)",
    period: "May 2026 — Present",
    points: [
      "Mentor students building VirusWatch in React/Vite for the Congressional App Challenge; break component design, symptom-selection logic, and navigation into student-led development tasks.",
      "Guide students through React state and import debugging, GitHub setup, Gemini API configuration, and Node.js API testing; use follow-up questions to check understanding and build independent debugging skills.",
    ],
    tech: ["React", "Vite", "JavaScript", "Node.js", "Gemini API"],
  },
  {
    company: "TradingFlow",
    role: "Full-Stack Developer Intern",
    period: "July 2024 — July 2025",
    location: "Redmond, WA",
    points: [
      "Developed an options data platform with Next.js, React, and TypeScript, enabling users to visualize financial datasets and download data through backend APIs backed by ClickHouse.",
      "Integrated Stripe subscriptions and Clerk authentication with protected application routes to support paid access and user management.",
      "Optimized frontend rendering and backend queries to improve responsiveness when exploring large financial datasets, contributing to a 30% increase in user engagement.",
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
    title: "Career Path",
    category: "FULL STACK APPLICATION",
    period: "May 2026 — Present",
    description: "A job-search workspace for applications, interviews, and follow-ups.",
    points: [
      "Built application tracking, search and filtering, interview scheduling, follow-up reminders, and dashboard analytics with an Express API and PostgreSQL/Prisma.",
      "Enforced per-user access with Clerk and request validation; added private S3 résumé storage, PDF checks, and short-lived download links while preserving existing document records.",
      "Tested workflows and user isolation with PostgreSQL integration tests and Playwright; added responsive layouts, CSV import/export, and automated CI checks.",
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
    title: "Weight Tracker – Forma",
    category: "MOBILE & AI",
    period: "Mar 2026 — Sept 2026",
    description: "A bilingual, five-tab app for weight trends, food diaries, and goals.",
    points: [
      "Added light/dark themes, cloud sync, and data exports while retaining existing records.",
      "Integrated OpenRouter AI to estimate calories and nutrients from food descriptions and photos, turning meal input into editable diary entries after user review.",
      "Moved AI requests into Firebase Cloud Functions with server-only secrets, consent checks, validated responses, and usage limits.",
      "Added Firestore ownership rules and automated UI, backend, and data-isolation tests; configured CI checks and iOS, Android, and web bundle builds.",
    ],
    tech: ["React Native", "Expo", "TypeScript", "Firebase", "Cloud Functions", "OpenRouter"],
    image: "/weight-tracker.webp",
    github: "https://github.com/Rose-Wei10/weight-tracker-app",
  },
  {
    title: "Anniversary Report Tool – GeoEngineers",
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
];
