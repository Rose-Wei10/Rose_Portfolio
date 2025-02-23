// components/AboutMe.tsx
import { Card, Row, Col, Typography, Avatar } from 'antd';
import '../styles/global.css';

const { Title, Paragraph } = Typography;

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="about-header">
        <Title level={1}>About Me</Title>
      </div>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <div className="avatar-container">
            <Avatar
              size={{ xs: 200, sm: 250, md: 300 }}
              src="/rose_image.jpg"
            />
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>Rose Wei</Title>
          <Title level={4}>Your Title / Role</Title>
          <Paragraph>
            Write a brief introduction about yourself here. Highlight your key skills,
            interests, and what you're passionate about. This is your chance to make
            a great first impression!
          </Paragraph>
          <Paragraph>
            Add more details about your background, what drives you, and what you're
            looking to achieve in your career.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}