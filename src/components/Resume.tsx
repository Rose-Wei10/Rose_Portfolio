// components/Resume.tsx
import { Card, Typography, Timeline } from 'antd';

const { Title, Paragraph } = Typography;

export default function Resume() {
  return (
    <Card>
      <Title level={2}>Resume</Title>
      <Title level={3}>Education</Title>
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

      <Title level={3}>Skills</Title>
      <Paragraph>
        <ul>
          <li>Skill 1 - Description</li>
          <li>Skill 2 - Description</li>
          <li>Skill 3 - Description</li>
        </ul>
      </Paragraph>
    </Card>
  );
}