// components/Experience.tsx
import { Typography, Timeline, Card } from 'antd';
import '../styles/global.css';

const { Title, Paragraph } = Typography;

export default function Experience() {
  return (
    <div className="experience-container">
      <Title level={1}>Professional Experience</Title>
      <Timeline
        mode="alternate"
        items={[
          {
            children: (
              <Card className="experience-card">
                <Title level={4}>Senior Position</Title>
                <Title level={5}>Company Name • 2022 - Present</Title>
                <Paragraph>
                  <ul>
                    <li>Major achievement or responsibility 1</li>
                    <li>Major achievement or responsibility 2</li>
                    <li>Major achievement or responsibility 3</li>
                  </ul>
                </Paragraph>
              </Card>
            ),
          },
          {
            children: (
              <Card className="experience-card">
                <Title level={4}>Mid-level Position</Title>
                <Title level={5}>Company Name • 2020 - 2022</Title>
                <Paragraph>
                  <ul>
                    <li>Achievement or responsibility 1</li>
                    <li>Achievement or responsibility 2</li>
                    <li>Achievement or responsibility 3</li>
                  </ul>
                </Paragraph>
              </Card>
            ),
          },
        ]}
      />
    </div>
  );
}