// components/Projects.tsx
import { Card, Row, Col, Typography, Tag, Button } from 'antd';
import { GithubOutlined, LinkOutlined } from '@ant-design/icons';
import '../styles/global.css';

const { Title, Paragraph } = Typography;

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1. Explain what the project does and what technologies you used.',
      tech: ['React', 'TypeScript', 'Ant Design'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://project1-demo.com',
      image: '/path-to-project1-image.jpg'
    },
    {
      title: 'Project 2',
      description: 'Description of project 2. Highlight the key features and your role in the project.',
      tech: ['Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/yourusername/project2',
      demo: 'https://project2-demo.com',
      image: '/path-to-project2-image.jpg'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects-container">
      <Title level={1} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Projects
      </Title>
      <Row gutter={[24, 24]} className="projects-grid">
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={index}>
            <Card
              className="project-card"
              cover={
                <img
                  alt={project.title}
                  src={project.image}
                  style={{ height: 200, objectFit: 'cover' }}
                />
              }
            >
              <Title level={3}>{project.title}</Title>
              <Paragraph>{project.description}</Paragraph>
              <div style={{ marginBottom: '1rem' }}>
                {project.tech.map((tech) => (
                  <Tag color="blue" key={tech} style={{ margin: '0.25rem' }}>
                    {tech}
                  </Tag>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Button 
                  type="primary" 
                  icon={<GithubOutlined />} 
                  href={project.github} 
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button 
                  icon={<LinkOutlined />} 
                  href={project.demo} 
                  target="_blank"
                >
                  Live Demo
                </Button>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
