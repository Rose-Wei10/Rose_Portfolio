import { experiences } from "../data";
import SectionHeading from "./SectionHeading";
export default function Experience() {
  return (
    <div className="shell section-pad">
      <SectionHeading
        label="02 / EXPERIENCE"
        title="Building products. Guiding others."
      />
      <div className="experience-list">
        {experiences.map((item) => (
          <article className="experience-row" key={item.company}>
            <div>
              <p className="eyebrow">{item.period}</p>
              <h3>{item.company}</h3>
              <p className="role">{item.role}</p>
              {item.location && <p>{item.location}</p>}
            </div>
            <div>
              <ul className="detail-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <ul className="tags">
                {item.tech.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
