import { Typography, Timeline, Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import { 
  ReadOutlined,
  CodeOutlined,
  ToolOutlined
} from '@ant-design/icons';
import '../styles/resume.css';

const { Title, Paragraph } = Typography;

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        const rect = resumeSection.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.7);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial render
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skillCategories = {
    programmingLanguages: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Python', level: 90 },
      { name: 'Java', level: 88 },
      { name: 'C#', level: 82 },
      { name: 'C++', level: 75 },
    ],

    frameworksAndTools: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Node.js', level: 88 },
      { name: 'Dash / Plotly', level: 85 },
      { name: 'Unity', level: 82 },
      { name: 'Git / GitHub', level: 92 },
      { name: 'Linux', level: 78 },
    ],

    databasesAndCloud: [
      { name: 'MySQL', level: 88 },
      { name: 'MongoDB', level: 82 },
      { name: 'Neo4j', level: 78 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'REST APIs', level: 90 },
      { name: 'AWS (Learning)', level: 65 },
    ],
  };

  const renderSkillSection = (title: string, skills: Array<{ name: string; level: number }>, icon: React.ReactNode) => (
    <div className={`skill-section ${isVisible ? 'animate-in' : ''}`}>
      <div className="skill-header">
        {icon}
        <Title level={3} className="skill-title">{title}</Title>
      </div>
      <Row gutter={[16, 8]} className="skill-grid">
        {skills.map((skill, index) => (
          <Col xs={24} sm={12} key={skill.name}>
            <div 
              className="skill-item" 
              style={{ animationDelay: `${0.1 + (index * 0.1)}s` }}
            >
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-container">
                <div 
                  className="skill-bar-fill" 
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    background: `linear-gradient(90deg, #108ee9 ${skill.level / 2}%, #87d068)`
                  }}
                ></div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <div className="resume-background" id="resume">
      <div className="resume-inner-container">
        <Title level={1} className="section-title resume-title">
          Education
        </Title>
        
        <div className="education-content">
          <div className={`education-section ${isVisible ? 'animate-in' : ''}`}>
            <div className="education-header">
              <ReadOutlined className="education-icon" />
              <Title level={3} className="education-title">Academic Background</Title>
            </div>
            
            <Timeline
              className="education-timeline"
              items={[
                {
                  children: (
                    <div className="education-item">
                      <Title level={4} className="university-name">
                        University of Illinois Urbana-Champaign
                      </Title>

                      <div className="education-details">
                        <div className="education-degree">
                          M.S. in Computer Science
                        </div>

                        <div className="education-years">
                          2025 - Present
                        </div>
                      </div>

                      <Paragraph className="education-description">
                        Focused on Applied AI, scalable systems, and data-driven software engineering.
                        Building full-stack applications and intelligent systems through advanced
                        coursework and collaborative research projects.
                      </Paragraph>

                      <div className="education-tags">
                        <span>Machine Learning</span>
                        <span>Distributed Systems</span>
                        <span>Data Engineering</span>
                        <span>Applied AI</span>
                      </div>
                    </div>
                  ),
                },

                {
                  children: (
                    <div className="education-item">
                      <Title level={4} className="university-name">
                        Western Washington University
                      </Title>

                      <div className="education-details">
                        <div className="education-degree">
                          B.S. in Computer Science
                        </div>

                        <div className="education-years">
                          2020 - 2024
                        </div>
                      </div>

                      <Paragraph className="education-description">
                        Developed strong foundations in software engineering, algorithms,
                        full-stack development, and system design through academic projects,
                        internships, and research collaboration.
                      </Paragraph>

                      <div className="education-tags">
                        <span>Software Engineering</span>
                        <span>Algorithms</span>
                        <span>Full-Stack Development</span>
                        <span>Databases</span>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
        
        <Title level={1} className="section-title skills-main-title">
          Skills
        </Title>
        
        <div className="skills-content">
          <Row gutter={[24, 24]}>
            <Col xs={24} lg={8} className="skills-column">
              {renderSkillSection(
                'Languages',
                skillCategories.programmingLanguages,
                <CodeOutlined className="skill-icon" />
              )}
            </Col>

            <Col xs={24} lg={8} className="skills-column">
              {renderSkillSection(
                'Frameworks & Tools',
                skillCategories.frameworksAndTools,
                <ToolOutlined className="skill-icon" />
              )}
            </Col>

            <Col xs={24} lg={8} className="skills-column">
              {renderSkillSection(
                'Databases & Backend',
                skillCategories.databasesAndCloud,
                <ToolOutlined className="skill-icon" />
              )}
            </Col>
          </Row>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="animated-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
}
