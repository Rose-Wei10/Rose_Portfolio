// components/Contact.tsx
import { Typography, Row, Col, Button, Card, Form, Input, message } from 'antd';
import { 
  LinkedinOutlined, 
  GithubOutlined, 
  MailOutlined,
  SendOutlined,
  EnvironmentOutlined,
  PhoneOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import emailjs from 'emailjs-com';  // Import EmailJS from npm package
import '../styles/global.css';
import '../styles/contactS.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setSending(true);
      
      const templateParams = {
        from_name: values.name,
        from_email: values.email,
        message: values.message
      };

      // Replace these with your own values after signing up at emailjs.com
      const serviceID = 'service_jkznzd9';
      const templateID = '__ejs-test-mail-service__';
      const userID = 'R36hthdEeCgqUn01vMcz9';

      await emailjs.send(serviceID, templateID, templateParams, userID);
      
      message.success('Message sent successfully!');
      form.resetFields();
    } catch (error) {
      console.error('Error sending email:', error);
      message.error('Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <div className="contact-background">
        <div className="contact-container">
          <Title level={1} className="contact-title">Contact Me</Title>
          
          <Row gutter={[32, 32]} className="contact-row">
            <Col xs={24} md={8}>
              <Card className="contact-info-card">
                <div className="contact-info-content">
                  <div className="contact-info-item">
                    <EnvironmentOutlined className="contact-icon" />
                    <span className="contact-text">Seattle, WA</span>
                  </div>
                  <div className="contact-info-item">
                    <PhoneOutlined className="contact-icon" />
                    <span className="contact-text">(206) 849-6276</span>
                  </div>
                  
                  <div className="social-media-header-container">
                    <h3 className="social-media-header">
                      <span>S</span>
                      <span>o</span>
                      <span>c</span>
                      <span>i</span>
                      <span>a</span>
                      <span>l</span>
                      <span>&nbsp;</span>
                      <span>M</span>
                      <span>e</span>
                      <span>d</span>
                      <span>i</span>
                      <span>a</span>
                    </h3>
                  </div>
                  
                  <div className="contact-social">
                    <Button 
                      type="primary" 
                      shape="circle"
                      icon={<LinkedinOutlined />}
                      href="https://www.linkedin.com/in/rose-wei/"
                      target="_blank"
                      size="large"
                      className="social-button"
                    />
                    <Button 
                      type="primary"
                      shape="circle"
                      icon={<GithubOutlined />}
                      href="https://github.com/Rose-Wei10"
                      target="_blank"
                      size="large"
                      className="social-button"
                    />
                    <Button 
                      type="primary"
                      shape="circle"
                      icon={<MailOutlined />}
                      href="mailto:rosewei6@gmail.com"
                      size="large"
                      className="social-button"
                    />
                  </div>
                </div>
              </Card>
            </Col>
            
            <Col xs={24} md={16}>
              <Card className="contact-form-card">
                <Form
                  form={form}
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
                      rows={5}
                    />
                  </Form.Item>
                  
                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      icon={<SendOutlined />}
                      size="large"
                      block
                      className="send-button"
                      loading={sending}
                    >
                      {sending ? 'Sending...' : 'Send Message'}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}