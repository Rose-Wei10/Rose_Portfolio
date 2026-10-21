// components/Contact.tsx
import { Typography, Row, Col, Button, Card, Form, Input } from "antd";

import {
  GithubOutlined,
  MailOutlined,
  SendOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";

import { useState } from "react";

import "../styles/contactS.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{
    kind: "success" | "error";
    text: string;
  } | null>(null);

  const onFinish = async (values: {
    name: string;
    email: string;
    message: string;
  }) => {
    try {
      setSending(true);
      setStatus(null);

      const response = await fetch(
        "https://formsubmit.co/ajax/rosewei6@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            message: values.message,
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Failed");
      }

      const result = await response.json();
      if (result.success !== true && result.success !== "true")
        throw new Error("Delivery failed");
      setStatus({ kind: "success", text: "Message sent successfully!" });
      form.resetFields();
    } catch (error) {
      console.error(error);
      setStatus({
        kind: "error",
        text: "Your message could not be sent. Please try again or email weir0210@gmail.com.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="contact-section-wrapper">
      <div className="contact-glow contact-glow-1"></div>
      <div className="contact-glow contact-glow-2"></div>

      <div className="contact-container">
        <div className="contact-header">
          <Title level={2} className="contact-title">
            Contact Me
          </Title>

          <Paragraph className="contact-subtitle">
            Open to software engineering opportunities, collaborations, and
            creative projects.
          </Paragraph>
        </div>

        {status && (
          <p
            className={`form-status ${status.kind}`}
            role={status.kind === "error" ? "alert" : "status"}
          >
            {status.text}
          </p>
        )}
        <Row gutter={[32, 32]} align="middle">
          <Col xs={24} lg={9}>
            <Card className="contact-info-card">
              <div className="contact-info-top">
                <div className="contact-badge">Available for Work</div>

                <h3 className="info-title">Let's Connect</h3>

                <p className="info-description">
                  Feel free to reach out for opportunities, collaborations, or
                  just to say hello.
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
                    <a href="mailto:weir0210@gmail.com">weir0210@gmail.com</a>
                  </div>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/Rose-Wei10"
                  target="_blank"
                  rel="noreferrer"
                  className="social-icon"
                  aria-label="GitHub profile"
                >
                  <GithubOutlined />
                </a>

                <a
                  href="mailto:weir0210@gmail.com"
                  className="social-icon"
                  aria-label="Email Rong Wei"
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
                      label="Name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your name",
                        },
                      ]}
                    >
                      <Input autoComplete="name" placeholder="Your Name" />
                    </Form.Item>
                  </Col>

                  <Col xs={24} md={12}>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                        {
                          type: "email",
                          message: "Invalid email address",
                        },
                      ]}
                    >
                      <Input autoComplete="email" placeholder="Your Email" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  name="message"
                  label="Message"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your message",
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
                  {sending ? "Sending..." : "Send Message"}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
