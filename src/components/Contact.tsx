// components/Contact.tsx
import { Typography, Row, Col, Button, Card, Form, Input } from 'antd';
import { 
  LinkedinOutlined, 
  GithubOutlined, 
  MailOutlined,
  SendOutlined 
} from '@ant-design/icons';
import '../styles/global.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const onFinish = (values: any) => {
    console.log('Form values:', values);
    // Implement your form submission logic here
  };

  return (
    <div className="contact-container">
      <Title level={1} style={{ textAlign: 'center', marginBottom: '3rem' }}>
        Contact Me
      </Title>
      
      <Row gutter={[32, 32]} justify="center">
        <Col xs={24} md={12}>
          <Card className="contact-info-card">
            <Title level={3}>Let's Connect!</Title>
            <Paragraph>
              I'm always open to new opportunities and collaborations.
              Feel free to reach out through any of these channels or send me a message.
            </Paragraph>
            
            <div className="contact-buttons">
              <Button 
                type="primary" 
                icon={<LinkedinOutlined />}
                href="https://www.linkedin.com/in/rose-wei/"
                target="_blank"
                size="large"
              >
                LinkedIn
              </Button>
              <Button 
                icon={<GithubOutlined />}
                href="https://github.com/Rose-Wei10"
                target="_blank"
                size="large"
              >
                GitHub
              </Button>
              <Button 
                icon={<MailOutlined />}
                href="mailto:rosewei6@gmail.com"
                size="large"
              >
                Email
              </Button>
            </div>
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card className="contact-form-card">
            <Form
              name="contact"
              onFinish={onFinish}
              layout="vertical"
              size="large"
            >
              <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please enter your name' }]}
              >
                <Input placeholder="Your Name" />
              </Form.Item>

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input placeholder="Your Email" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Please enter your message' }]}
              >
                <TextArea 
                  placeholder="Your Message" 
                  rows={4}
                />
              </Form.Item>

              <Form.Item>
                <Button 
                  type="primary" 
                  htmlType="submit" 
                  icon={<SendOutlined />}
                  block
                >
                  Send Message
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
