// components/Experience.tsx
import { Typography, Row, Col, Tag } from 'antd';
import {
  CodeOutlined,
  DatabaseOutlined,
  RocketOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';
import '../styles/experience.css';

const { Title, Paragraph, Text } = Typography;

export default function Experience() {
  const experiences = [
    {
      company: 'TradingFlow',
      role: 'Full Stack Developer Intern',
      location: 'Redmond, WA',
      period: 'July 2024 - July 2025',
      description: [
        'Built and maintained a scalable options data portal using Next.js, React, TypeScript, and Clerk authentication.',
        'Developed custom APIs with ClickHouse integration for high-performance options data storage, filtering, and downloads.',
        'Enhanced AI-powered stock training tools and platform workflows, contributing to improved user engagement and customer experience.',
      ],
      technologies: ['Next.js', 'React', 'TypeScript', 'ClickHouse', 'Stripe', 'Clerk'],
      icon: <CodeOutlined />,
    },
  ];

  return (
    <div className="experience-background">
      <div className="experience-container">
        <div className="experience-header">
          <Text className="experience-subtitle">Career Journey</Text>
          <Title level={1} className="experience-title">
            Professional Experience
          </Title>
          <div className="experience-divider"></div>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <div
              className="experience-card-wrapper"
              key={index}
            >
              <div className="timeline-dot"></div>

              <div className="experience-card">
                <div className="experience-glow"></div>

                <Row gutter={[32, 32]} align="middle">
                  <Col xs={24} lg={7}>
                    <div className="experience-side">
                      <div className="experience-icon-wrapper">
                        {experience.icon}
                      </div>

                      <Title level={2} className="company-title">
                        {experience.company}
                      </Title>

                      <Paragraph className="role-title">
                        {experience.role}
                      </Paragraph>

                      <div className="experience-meta">
                        <div className="meta-item">
                          <CalendarOutlined />
                          <span>{experience.period}</span>
                        </div>

                        <div className="meta-item">
                          <EnvironmentOutlined />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </Col>

                  <Col xs={24} lg={17}>
                    <div className="experience-content">
                      <div className="experience-description">
                        {experience.description.map((item, i) => (
                          <div className="experience-point" key={i}>
                            <div className="point-icon">
                              {i === 0 ? (
                                <CodeOutlined />
                              ) : i === 1 ? (
                                <DatabaseOutlined />
                              ) : (
                                <RocketOutlined />
                              )}
                            </div>

                            <Paragraph className="experience-text">
                              {item}
                            </Paragraph>
                          </div>
                        ))}
                      </div>

                      <div className="experience-tags">
                        {experience.technologies.map((tech) => (
                          <Tag className="experience-tag" key={tech}>
                            {tech}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="experience-bg-decoration decoration-1"></div>
      <div className="experience-bg-decoration decoration-2"></div>
    </div>
  );
}