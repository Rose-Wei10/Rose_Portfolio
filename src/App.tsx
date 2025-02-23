// src/App.tsx
import { useState, useEffect } from 'react';
import { Layout, Menu } from 'antd';
import type { MenuProps } from 'antd';
import {
  UserOutlined,
  FileOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  ContactsOutlined,
} from '@ant-design/icons';
import AboutMe from './components/AboutMe';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import './App.css';

const { Header, Content } = Layout;

export default function App() {
  const [activeSection, setActiveSection] = useState('about');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 64; // Height of your fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle scroll to update active menu item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'resume', 'experience', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.top <= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuProps['items'] = [
    {
      key: 'about',
      icon: <UserOutlined />,
      label: 'About Me',
      onClick: () => scrollToSection('about'),
    },
    {
      key: 'resume',
      icon: <FileOutlined />,
      label: 'Resume',
      onClick: () => scrollToSection('resume'),
    },
    {
      key: 'experience',
      icon: <ExperimentOutlined />,
      label: 'Experience',
      onClick: () => scrollToSection('experience'),
    },
    {
      key: 'projects',
      icon: <ProjectOutlined />,
      label: 'Projects',
      onClick: () => scrollToSection('projects'),
    },
    {
      key: 'contact',
      icon: <ContactsOutlined />,
      label: 'Contact',
      onClick: () => scrollToSection('contact'),
    },
  ];

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="header-content">
          <div className="logo">Rose Portfolio</div>
          <Menu
            mode="horizontal"
            items={menuItems}
            selectedKeys={[activeSection]}
            className="nav-menu"
          />
        </div>
      </Header>

      <Content className="main-content">
        <section id="about" className="section about-section">
          <AboutMe />
        </section>

        <section id="resume" className="section resume-section">
          <Resume />
        </section>

        <section id="experience" className="section experience-section">
          <Experience />
        </section>

        <section id="projects" className="section projects-section">
          <Projects />
        </section>

        <section id="contact" className="section contact-section">
          <Contact />
        </section>
      </Content>
    </Layout>
  );
}

// Add these styles to your App.css
/*
.layout {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.header {
  position: fixed;
  width: 100%;
  z-index: 1000;
  padding: 0;
  background: rgba(255, 255, 255, 0.9) !important;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #1890ff;
  font-size: 1.5rem;
  font-weight: bold;
  padding: 0 1rem;
}

.nav-menu {
  border: none;
  background: transparent;
  flex: 1;
  justify-content: flex-end;
}

.main-content {
  padding-top: 64px;
  min-height: calc(100vh - 64px);
}

.section {
  min-height: 100vh;
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  position: relative;
}

.about-section,
.resume-section,
.experience-section,
.projects-section,
.contact-section {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 1rem;
  margin: 2rem auto;
  width: 100%;
}

@media (max-width: 768px) {
  .header-content {
    flex-direction: column;
    padding: 0.5rem;
  }

  .logo {
    margin-bottom: 0.5rem;
  }

  .section {
    padding: 2rem 1rem;
  }

  .main-content {
    padding-top: 110px;
  }
}
*/