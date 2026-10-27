import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <div className="shell section-pad contact-content">
      <SectionHeading
        label="05 / CONTACT"
        title="Let’s build something together."
        description="Get in touch about software engineering opportunities, collaborations, or a project you have in mind."
      />
      <a className="button primary contact-email" href="mailto:weir0210@gmail.com">
        <MailOutlined /> weir0210@gmail.com
      </a>
      <div className="hero-social">
        <a href="https://github.com/Rose-Wei10" target="_blank" rel="noreferrer">
          <GithubOutlined /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/rong-wei10/" target="_blank" rel="noreferrer">
          <LinkedinOutlined /> LinkedIn
        </a>
      </div>
    </div>
  );
}
