import SectionHeading from "./SectionHeading";
export default function AboutMe() {
  return (
    <div className="shell section-pad">
      <SectionHeading label="01 / ABOUT" title="Building across the stack." />
      <div className="about-grid">
        <img
          src="/rose-portrait.webp"
          alt="Rong (Rose) Wei"
          width="360"
          height="420"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="large-copy">
            I’m a software engineer with experience in financial data platforms,
            web applications, and mobile development.
          </p>
          <p>
            At TradingFlow, I worked on an options data platform with Next.js,
            React, TypeScript, and ClickHouse, including subscriptions and
            authentication. Today, I’m building full-stack projects while
            pursuing my master’s degree and mentoring students at MehtA+.
          </p>
          <p>
            I’m interested in Full Stack Developer and Software Engineer
            opportunities where I can contribute across interfaces, APIs, and
            databases.
          </p>
          <a className="text-link" href="#experience">
            Explore my experience →
          </a>
        </div>
      </div>
    </div>
  );
}
