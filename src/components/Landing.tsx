import {
  GithubOutlined,
  LinkedinOutlined,
  ArrowRightOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
export default function Landing() {
  return (
    <div className="hero shell">
      <div className="hero-copy">
        <p className="eyebrow">FULL STACK DEVELOPER · SOFTWARE ENGINEER</p>
        <h1>
          Hi, I’m <span>Rong Wei.</span>
          <small>You can call me Rose.</small>
        </h1>
        <p className="hero-summary">
          I build thoughtful applications, from the interface to the database.
        </p>
        <p className="hero-detail">
          React and TypeScript on the frontend. Node.js, APIs, and data behind
          the scenes. Currently pursuing my M.S. in Computer Science at UIUC.
        </p>
        <div className="actions">
          <a className="button primary" href="#projects">
            Explore my work <ArrowRightOutlined />
          </a>
          <a className="button" href="/Rong_Resume.pdf" download>
            <DownloadOutlined /> Download résumé
          </a>
        </div>
        <div className="hero-social">
          <a
            href="https://github.com/Rose-Wei10"
            target="_blank"
            rel="noreferrer"
          >
            <GithubOutlined /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rose-wei/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedinOutlined /> LinkedIn
          </a>
        </div>
      </div>
      <aside className="hero-aside" aria-label="Engineering focus">
        <p className="eyebrow">FROM IDEA TO IMPLEMENTATION</p>
        <div className="stack-layer">
          <span>01 / INTERFACE</span>
          <strong>Web & mobile</strong>
          <p>React · Next.js · React Native</p>
        </div>
        <div className="stack-layer">
          <span>02 / APPLICATION</span>
          <strong>APIs & integrations</strong>
          <p>Node.js · Express · Authentication</p>
        </div>
        <div className="stack-layer">
          <span>03 / DATA</span>
          <strong>Persistence & storage</strong>
          <p>PostgreSQL · Prisma · AWS S3</p>
        </div>
        <p className="aside-note">A full-stack perspective, at every layer.</p>
      </aside>
    </div>
  );
}
