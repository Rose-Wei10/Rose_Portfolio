import { Button, Typography } from 'antd';
import {
  GithubOutlined,
  LinkedinOutlined,
  DownloadOutlined,
} from '@ant-design/icons';

import { motion } from 'framer-motion';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from 'react-icons/fa';

import {
  SiTypescript,
  SiFirebase,
  SiPytorch,
  SiNextdotjs,
} from 'react-icons/si';
import { useEffect, useState } from 'react';

import heroBg from '../assets/background1.png';

import '../styles/landingS.css';

const { Title, Paragraph } = Typography;

export default function Landing() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 64,
        behavior: 'smooth',
      });
    }
  };
  const [mousePosition, setMousePosition] = useState({
  x: 0,
  y: 0,
});


  const floatingIcons = [
    <FaReact />,
    <FaNodeJs />,
    <FaPython />,
    <FaDatabase />,
    <SiTypescript />,
    <SiFirebase />,
    <SiPytorch />,
    <SiNextdotjs />,
  ];

  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(2,6,23,0.82),
            rgba(2,6,23,0.92)
          ),
          url(${heroBg})
        `,
      }}
    >
      <motion.div
      className="mouse-glow"
      animate={{
        x: mousePosition.x - 200,
        y: mousePosition.y - 200,
      }}
      transition={{
        type: 'spring',
        damping: 30,
        stiffness: 200,
      }}
    />
      <div className="hero-overlay"></div>

      {/* floating tech icons */}
      {floatingIcons.map((icon, index) => (
        <motion.div
          key={index}
          className={`floating-icon floating-icon-${index}`}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {icon}
        </motion.div>
      ))}

      {/* particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="hero-particle"
          animate={{
            y: ['0vh', '-120vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear',
          }}
          style={{
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-name-glow"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Paragraph className="hero-subtitle">
            MSCS @ UIUC • Full-Stack & AI Engineer
          </Paragraph>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="hero-title-wrapper"
            initial="hidden"
            animate="visible"
          >
          <Title className="hero-title">
            <span className="hero-intro">
              {"Hi, I'm "}
            </span>

            <span className="hero-name">
              {"Rose Wei".split('').map((char, index) => (
                <motion.span
                  key={`name-${index}`}
                  className="hero-name-letter"
                  initial={{
                    opacity: 0,
                    y: 80,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  transition={{
                    delay: 0.4 + index * 0.08,
                    duration: 0.7,
                    type: 'spring',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>
          </Title>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
          }}
          transition={{
            delay: 1.2,
            duration: 1.2,
            ease: 'easeOut',
          }}
        >
          <Paragraph className="hero-description">
            I build scalable full-stack applications, AI-powered tools,
            and data-intensive systems across web, mobile, and machine learning.
            From financial analytics platforms to intelligent health applications,
            I enjoy transforming complex ideas into impactful user experiences.
          </Paragraph>
        </motion.div>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <Button
            type="primary"
            size="large"
            onClick={scrollToProjects}
          >
            View Projects
          </Button>

          <Button
            size="large"
            icon={<GithubOutlined />}
            href="https://github.com/Rose-Wei10"
            target="_blank"
          >
            GitHub
          </Button>

          <Button
            size="large"
            icon={<LinkedinOutlined />}
            href="https://www.linkedin.com/in/rose-wei/"
            target="_blank"
          >
            LinkedIn
          </Button>

          <Button
            size="large"
            icon={<DownloadOutlined />}
            href="/Rong_Resume.pdf"
            target="_blank"
          >
            Resume
          </Button>
        </motion.div>
      </motion.div>


    </div>
  );
}