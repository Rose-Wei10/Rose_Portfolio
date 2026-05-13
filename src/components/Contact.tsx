// components/Contact.tsx
import {
  Typography,
  Row,
  Col,
  Button,
  Card,
  Form,
  Input,
  message,
} from 'antd';

import {
  LinkedinOutlined,
  GithubOutlined,
  MailOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons';

import { useState } from 'react';

import '../styles/contactS.css';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);

  const onFinish = async (values: any) => {
    try {
      setSending(true);

      const response = await fetch(
        'https://formsubmit.co/ajax/rosewei6@gmail.com',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed');
      }

      message.success('Message sent successfully!');
      form.resetFields();
    } catch (error) {
      console.error(error);
      message.error('Failed to send message.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section-wrapper" id="contact">
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="contact-container">
        <div className="contact-header">
          <Title level={1} className="contact-title">
            Contact Me
          </Title>

          <Paragraph className="contact-subtitle">
            Open to software engineering opportunities, collaborations,
            and creative projects.
          </Paragraph>
        </div>

        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={9}>
            <Card className="contact-info-card">
              <div className="contact-info-top">
                <div className="contact-badge">Available for Work</div>

                <h2 className="info-title">Let's Connect</h2>

                <p className="info-description">
                  Feel free to reach out for opportunities,
                  collaborations, or just to say hello.
                </p>
              </div>

              <div className="contact-info-list">
                <div className="contact-info-item">
                  <div className="icon-wrapper">
                    <EnvironmentOutlined />
                  </div>

                  <div>
                    <span className="label">Location</span>
                    <p>Seattle, Washington</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="icon-wrapper">
                    <MailOutlined />
                  </div>

                  <div>
                    <span className="label">Email</span>
                    <p>rosewei6@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="social-links">

                <a
                  href="https://github.com/Rose-Wei10"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                >
                  <GithubOutlined />
                </a>

                <a
                  href="mailto:rosewei6@gmail.com"
                  className="social-icon"
                >
                  <MailOutlined />
                </a>
              </div>
            </Card>
          </Col>

          <Col xs={24} lg={15}>
            <Card className="contact-form-card">
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                size="large"
              >
                <Row gutter={16}>
                  <Col xs={24} md={12}>
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your name',
                        },
                      ]}
                    >
                      <Input placeholder="Your Name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: 'Please enter your email',
                        },
                        {
                          type: 'email',
                          message: 'Invalid email address',
                        },
                      ]}
                    >
                      <Input placeholder="Your Email" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                      message: 'Please enter your message',
                    },
                  ]}
                >
                  <TextArea
                    rows={8}
                    placeholder="Tell me about your project or opportunity..."
                  />
                </Form.Item>

                <Button
                  htmlType="submit"
                  type="primary"
                  className="send-button"
                  icon={<SendOutlined />}
                  loading={sending}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}