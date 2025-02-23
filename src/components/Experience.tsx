// components/Experience.tsx
import { Card, Timeline, Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function Experience() {
  return (
    <Card>
      <Title level={2}>Professional Experience</Title>
      <Timeline
        items={[
          {
            children: (
              <>
                <Title level={4}>Company Name</Title>
                <Paragraph>Position • Start Date - End Date</Paragraph>
                <Paragraph>
                  <ul>
                    <li>Achievement or responsibility 1</li>
                    <li>Achievement or responsibility 2</li>
                    <li>Achievement or responsibility 3</li>
                  </ul>
                </Paragraph>
              </>
            ),
          },
        ]}
      />
    </Card>
  );
}
