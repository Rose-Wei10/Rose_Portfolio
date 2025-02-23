// components/Contact.tsx
import { Card, Typography, Row, Col, Button } from 'antd';
import { 
  LinkedinOutlined, 
  GithubOutlined, 
  MailOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export default function Contact() {
  return (
    <Card>
      <Title level={2}>Contact Me</Title>
      <Paragraph>
        I'm always open to new opportunities and collaborations.
        Feel free to reach out through any of the following channels:
      </Paragraph>
      <Row gutter={[16, 16]}>
        <Col>
          <Button 
            type="primary" 
            icon={<LinkedinOutlined />}
            href="https://linkedin.com/in/your-profile"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Col>
        <Col>
          <Button 
            icon={<GithubOutlined />}
            href="https://github.com/your-username"
            target="_blank"
          >
            GitHub
          </Button>
        </Col>
        <Col>
          <Button 
            icon={<MailOutlined />}
            href="mailto:your.email@example.com"
          >
            Email
          </Button>
        </Col>
      </Row>
    </Card>
  );
}