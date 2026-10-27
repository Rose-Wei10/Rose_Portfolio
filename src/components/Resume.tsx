import SectionHeading from "./SectionHeading";
const skills: Record<string, string[]> = {
  Languages: [
    "TypeScript",
    "JavaScript",
    "SQL",
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
  ],
  Frontend: ["React", "Next.js", "React Native", "Expo", "Vite", "Dash", "Plotly"],
  "Backend & data": [
    "Node.js",
    "Express",
    "REST APIs",
    "Prisma",
    "PostgreSQL",
    "MySQL",
    "ClickHouse",
    "MongoDB",
    "Neo4j",
  ],
  "Cloud & tools": [
    "AWS S3",
    "AWS IAM",
    "Firebase",
    "Git",
    "Docker",
    "Linux",
    "Clerk",
    "Stripe",
    "Jest",
    "Playwright",
    "GitHub Actions",
  ],
};
export default function Resume() {
  return (
    <div className="shell section-pad">
      <SectionHeading
        label="04 / TOOLKIT & EDUCATION"
        title="The tools. The foundations."
      />
      <div className="skills-grid">
        {Object.entries(skills).map(([name, items]) => (
          <article className="panel" key={name}>
            <h3>{name}</h3>
            <ul className="tags">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="education-grid">
        <article>
          <p className="eyebrow">JUNE 2025 — PRESENT</p>
          <h3>University of Illinois Urbana-Champaign</h3>
          <p>Master of Computer Science</p>
        </article>
        <article>
          <p className="eyebrow">SEPT 2020 — JUNE 2024</p>
          <h3>Western Washington University</h3>
          <p>Bachelor of Science in Computer Science</p>
          <p>GPA: 3.61 / 4.00</p>
        </article>
      </div>
    </div>
  );
}
