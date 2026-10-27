import { projects, Project } from "../data";
import SectionHeading from "./SectionHeading";
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} application screenshot`}
            width="800"
            height="450"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div className="project-placeholder" aria-hidden="true">
            <span>APPLICATION / 0{index + 1}</span>
            <strong>
              Career
              <br />
              Path<span className="cursor">_</span>
            </strong>
            <div className="mini-tags">
              <span>Applications</span>
              <span>Résumés</span>
            </div>
          </div>
        )}
      </div>
      <div className="project-body">
        <p className="eyebrow">{project.category}</p>
        <h3>{project.title}</h3>
        <p className="project-period">{project.period}</p>
        <p>{project.description}</p>
        <ul className="tags">
          {project.tech.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label={`View ${project.title} source on GitHub`}
            >
              Source code ↗
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${project.title} demo`}
            >
              Watch demo ↗
            </a>
          )}
        </div>
        <details className="project-details">
          <summary aria-label={`${project.title}: project details`}>Project details</summary>
          <ul className="detail-list">
            {project.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </details>
      </div>
    </article>
  );
}
export default function Projects() {
  return (
    <div className="shell section-pad">
      <SectionHeading
        label="03 / SELECTED WORK"
        title="Ideas turned into applications."
        description="Full-stack workflows, mobile experiences, and data-rich interfaces."
      />
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
      <details className="more-work">
        <summary>More work · The Wizard’s Apprentice</summary>
        <p>
          A Unity fantasy combat platformer with combat systems, health
          mechanics, and multi-level progression, built with C#.
        </p>
        <img
          src="/wizard-start.webp"
          alt="The Wizard’s Apprentice start screen"
          width="800"
          height="450"
          loading="lazy"
        />
      </details>
    </div>
  );
}
