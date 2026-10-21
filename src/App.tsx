import { useEffect, useState } from "react";
import { Button, ConfigProvider, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Skills & education" },
  { id: "contact", label: "Contact" },
];
export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-20% 0px -55% 0px" },
    );
    document
      .querySelectorAll("main > section")
      .forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const links = (
    <nav aria-label="Main navigation">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-current={active === section.id ? "location" : undefined}
          onClick={() => setOpen(false)}
        >
          {section.label}
        </a>
      ))}
    </nav>
  );
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#135e50",
          fontFamily:
            'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
          borderRadius: 10,
        },
      }}
    >
      <div className="portfolio">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <header className="site-header">
          <div className="shell header-inner">
            <a className="brand" href="#home" aria-label="Rose Wei, home">
              rw<span>.</span>
            </a>
            <div className="desktop-nav">{links}</div>
            <Button
              className="menu-toggle"
              icon={<MenuOutlined />}
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            />
            <Drawer
              title="Navigation"
              open={open}
              onClose={() => setOpen(false)}
              className="navigation-drawer"
            >
              {links}
            </Drawer>
          </div>
        </header>
        <main id="main">
          <section id="home">
            <Landing />
          </section>
          <section id="about">
            <AboutMe />
          </section>
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="resume">
            <Resume />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
