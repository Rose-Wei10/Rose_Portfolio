// components/Resume.tsx
import { Typography, Timeline, Card, Row, Col, Progress, Divider } from 'antd';

const { Title, Paragraph } = Typography;

export default function Resume() {
  const skillCategories = {
    programmingLanguages: [
      { name: 'Java', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'C', level: 80 },
      { name: 'C#', level: 85 },
      { name: 'C++', level: 80 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript', level: 90 },
    ],
    toolsAndTechnologies: [
      { name: 'Git', level: 85 },
      { name: 'Unity', level: 80 },
      { name: 'Linux', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 85 },
      { name: 'Posthog', level: 75 },
      { name: 'ClickHouse', level: 70 },
      { name: 'Pandas', level: 80 },
      { name: 'Next.js', level: 85 },
      { name: 'PostgreSQL', level: 80 },
    ],
    frontend: [
      { name: 'React', level: 90 },
      { name: 'React Native', level: 85 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
    ],
    backend: [
      { name: 'Node.js', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  };

  const renderSkillSection = (title: string, skills: Array<{ name: string; level: number }>) => (
    <div style={{ marginBottom: '2rem' }}>
      <Title level={4} style={{ marginBottom: '1rem' }}>
        {title}
      </Title>
      <Row gutter={[16, 16]}>
        {skills.map((skill) => (
          <Col xs={24} sm={12} key={skill.name}>
            <div style={{ marginBottom: '0.5rem' }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                marginBottom: '0.25rem' 
              }}>
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress 
                percent={skill.level} 
                showInfo={false} 
                strokeColor={{
                  '0%': '#108ee9',
                  '100%': '#87d068',
                }}
                style={{ marginBottom: '0.5rem' }}
              />
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );

  return (
    <div className="resume-container">
      {/* <Title level={1} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Resume
      </Title> */}
      
      <Row gutter={[32, 32]}>
        <Col xs={24} lg={12}>
          <Card title="Education" className="education-card">
            <Timeline
              items={[
                {
                  children: (
                    <>
                      <Title level={4}>Western Washington University</Title>
                      <Paragraph>B.S. in Computer Science • 2020 - 2024</Paragraph>
                      <Paragraph>Brief description of your studies and achievements</Paragraph>
                    </>
                  ),
                },
              ]}
            />
          </Card>
        </Col>
        
        <Col xs={24} lg={12}>
          <Card title="Skills" className="skills-card">
            {renderSkillSection('Programming Languages', skillCategories.programmingLanguages)}
            <Divider />
            {renderSkillSection('Tools and Technologies', skillCategories.toolsAndTechnologies)}
            <Divider />
            {renderSkillSection('Frontend', skillCategories.frontend)}
            <Divider />
            {renderSkillSection('Backend', skillCategories.backend)}
          </Card>
        </Col>
      </Row>
    </div>
  );
}