// components/AboutMe.tsx
import { Card, Row, Col, Typography, Avatar, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import '../styles/global.css';

const { Title, Paragraph } = Typography;

export default function AboutMe() {
  const handleResumeClick = () => {
    // Replace with your actual resume URL
    window.open('/https://docs.google.com/document/d/1sbmZ3L64xzkz6GPhovuV-o50C3C9MkAW3xI5opbWAa0/edit?usp=sharing', '_blank');
    // Or for download:
    // const link = document.createElement('a');
    // link.href = '/path-to-your-resume.pdf';
    // link.download = 'Rose_Wei_Resume.pdf';
    // link.click();
  };

  return (
    <div className="about-container">
      <div className="about-header">
        <Title level={1}>About Me</Title>
      </div>
      <Row gutter={[32, 32]} align="middle">
        <Col xs={24} md={12}>
          <div className="avatar-container">
            <div className="avatar-wrapper">
              <Avatar
                src="/rose_image.jpg"
                className="fixed-avatar"
              />
            </div>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <Title level={2}>Rose Wei</Title>
          <Title level={4}>Software Engineer</Title>
          <Button 
            type="primary" 
            icon={<DownloadOutlined />} 
            size="large"
            onClick={handleResumeClick}
            className="resume-button"
          >
            Download Resume
          </Button>
          <Paragraph style={{ marginTop: '2rem' }}>
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