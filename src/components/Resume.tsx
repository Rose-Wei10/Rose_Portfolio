// components/Resume.tsx
import { Typography, Timeline, Card, Row, Col, Progress } from 'antd';
import '../styles/global.css';

const { Title, Paragraph } = Typography;

export default function Resume() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
  ];

  return (
    <div className="resume-container">
      <Title level={1}>Resume</Title>
      
      <Row gutter={[32, 32]}>
        <Col xs={24} md={12}>
          <Card title="Education" className="education-card">
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <Title level={4}>University Name</Title>
                      <Paragraph>Degree • Year - Year</Paragraph>
                      <Paragraph>Brief description of your studies and achievements</Paragraph>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
        
        <Col xs={24} md={12}>
          <Card title="Skills" className="skills-card">
            {skills.map((skill) => (
              <div key={skill.name} style={{ marginBottom: '1rem' }}>
                <Paragraph>{skill.name}</Paragraph>
                <Progress percent={skill.level} showInfo={false} strokeColor="#1890ff" />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </div>
  );
}