// components/AboutMe.tsx
import { Card, Row, Col, Typography, Avatar } from 'antd';

const { Title, Paragraph } = Typography;

export default function AboutMe() {
  return (
    <Card>
      <Row gutter={[16, 16]} align="middle">
        <Col xs={24} sm={8}>
          <Avatar
            size={{ xs: 160, sm: 200, md: 240, lg: 280, xl: 300 }}
            src="/path-to-your-image.jpg"
          />
        </Col>
        <Col xs={24} sm={16}>
          <Title level={2}>Rose Wei</Title>
          <Title level={4}>Your Title / Role</Title>
          <Paragraph>
            Write a brief introduction about yourself here. Highlight your key skills,
            interests, and what you're passionate about. This is your chance to make
            a great first impression!
          </Paragraph>
        </Col>
      </Row>
    </Card>
  );
}