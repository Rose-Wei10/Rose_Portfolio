// components/Projects.tsx
import { Card, Row, Col, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of project 1',
      tech: ['React', 'TypeScript', 'Ant Design'],
      link: 'https://project1.com'
    },
    // Add more projects
  ];

  return (
    <Row gutter={[16, 16]}>
      {projects.map((project, index) => (
        <Col xs={24} sm={12} lg={8} key={index}>
          <Card title={project.title}>
            <Paragraph>{project.description}</Paragraph>
            <Paragraph>
              <strong>Technologies:</strong> {project.tech.join(', ')}
            </Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
