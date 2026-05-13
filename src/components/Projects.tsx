import {
  Card,
  Typography,
  Tag,
  Button,
  Carousel,
  Row,
  Col,
} from 'antd';
import {
  GithubOutlined,
  LinkOutlined,
  LeftOutlined,
  RightOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import { useEffect, useRef } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import '../styles/projects.css';

const { Title, Paragraph } = Typography;

export default function Projects() {
  const imageCarouselRefs = useRef<(CarouselRef | null)[]>([]);

  const projects = [
    {
      featured: true,
      title: 'Academic World Analytics Platform',
      category: 'Full Stack • Data Engineering',
      year: '2025',
      description:
        'Multi-database research analytics dashboard built with Dash, Neo4j, MongoDB, and MySQL for large-scale academic publication insights.',
      highlights: [
        'Integrated relational and NoSQL databases with optimized real-time querying.',
        'Built faculty ranking, publication analysis, and keyword exploration widgets.',
        'Improved dashboard responsiveness through indexing and efficient query design.',
      ],
      tech: ['Python', 'Dash', 'Plotly', 'MySQL', 'MongoDB', 'Neo4j'],
      github: 'https://github.com/CS411DSO-SU25/RongWei',
      demo: 'https://www.youtube.com/watch?v=n4ST6as_j3o',
      images: ['/academicProjectSnap.png'],
    },
    {
      featured: true,
      title: 'AI Calorie Tracker',
      category: 'AI + Mobile Development',
      year: '2026',
      description:
        'AI-powered calorie tracking application using image recognition and nutrition estimation to simplify meal logging.',
      highlights: [
        'Integrated multimodal AI APIs for food image understanding and calorie estimation.',
        'Designed a clean mobile-first UI focused on fast daily tracking workflows.',
        'Built scalable backend architecture for user history and analytics.',
      ],
      tech: ['React Native', 'TypeScript', 'OpenAI API', 'Node.js', 'Firebase'],
      github: 'https://github.com/Rose-Wei10/weight-tracker-app',
      demo: 'https://your-demo-link.com',
      images: ['/WeightTrackerSnap.png'],
    },
    {
      featured: false,
      title: 'Anniversary Report Tool',
      category: 'Corporate Automation',
      year: '2024',
      description:
        'Internal automation platform for employee milestone tracking and anniversary reporting.',
      highlights: [
        'Automated milestone notifications and anniversary workflows.',
        'Developed React frontend with PostgreSQL-backed reporting system.',
      ],
      tech: ['React', 'Node.js', 'PostgreSQL'],
      github: 'https://github.com/yourusername/anniversary-tool',
      demo: 'https://anniversary-tool-demo.com',
      images: ['/geoEngineerSnap.png'],
    },
    {
      featured: false,
      title: "The Wizard's Apprentice",
      category: '3D Game Development',
      year: '2023',
      description:
        'Fantasy combat platformer developed in Unity with progression systems and enemy combat mechanics.',
      highlights: [
        'Built combat systems, health mechanics, and multi-level progression.',
        'Created immersive gameplay systems using Unity and C# scripting.',
      ],
      tech: ['Unity', 'C#', '3D Modeling'],
      github: 'https://github.com/yourusername/wizards-apprentice',
      demo: 'https://wizards-apprentice-demo.com',
      images: ['/start_screen.png'],
    },
  ];

  useEffect(() => {
    imageCarouselRefs.current = imageCarouselRefs.current.slice(0, projects.length);
  }, [projects.length]);

  const navigateImageGallery = (
    projectIndex: number,
    direction: 'prev' | 'next'
  ) => {
    const carousel = imageCarouselRefs.current[projectIndex];
    if (carousel) {
      direction === 'prev' ? carousel.prev() : carousel.next();
    }
  };

  return (
    <div className="projects-background">
      <div className="projects-container">
        <div className="projects-header">
          <Paragraph className="projects-section-label">
            FEATURED WORK
          </Paragraph>

          <Title level={1} className="projects-main-title">
            Selected Projects
          </Title>

          <Paragraph className="projects-subtitle">
            A collection of software engineering, AI, database systems, and
            game development projects focused on building scalable and polished
            user experiences.
          </Paragraph>
        </div>

        <div className="featured-projects-grid">
          {projects
            .filter((project) => project.featured)
            .map((project, index) => (
              <Card
                key={index}
                bordered={false}
                className="featured-project-card"
              >
                <div className="featured-image-wrapper">
                  {project.images.length > 1 ? (
                    <>
                      <Carousel
                        dots
                        infinite
                        speed={500}
                        ref={(ref: any) => {
                          imageCarouselRefs.current[index] = ref;
                        }}
                      >
                        {project.images.map((image, imgIndex) => (
                          <div key={imgIndex}>
                            <img
                              src={image}
                              alt={`${project.title} ${imgIndex + 1}`}
                              className="featured-project-image"
                            />
                          </div>
                        ))}
                      </Carousel>

                      <div className="carousel-controls">
                        <button
                          className="carousel-button"
                          onClick={() =>
                            navigateImageGallery(index, 'prev')
                          }
                        >
                          <LeftOutlined />
                        </button>

                        <button
                          className="carousel-button"
                          onClick={() =>
                            navigateImageGallery(index, 'next')
                          }
                        >
                          <RightOutlined />
                        </button>
                      </div>
                    </>
                  ) : (
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="featured-project-image"
                    />
                  )}

                  <div className="featured-overlay"></div>
                </div>

                <div className="featured-card-content">
                  <div className="project-meta-row">
                    <span className="project-category">
                      {project.category}
                    </span>
                    <span className="project-year">{project.year}</span>
                  </div>

                  <Title level={2} className="featured-project-title">
                    {project.title}
                  </Title>

                  <Paragraph className="featured-project-description">
                    {project.description}
                  </Paragraph>

                  <div className="project-highlights">
                    {project.highlights.map((highlight, i) => (
                      <div className="highlight-item" key={i}>
                        <ArrowRightOutlined className="highlight-icon" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <div className="project-tech-stack">
                    {project.tech.map((tech) => (
                      <Tag key={tech} className="project-tech-tag">
                        {tech}
                      </Tag>
                    ))}
                  </div>

                  <div className="project-action-buttons">
                    <Button
                      icon={<GithubOutlined />}
                      href={project.github}
                      target="_blank"
                      className="project-github-button"
                      size="large"
                    >
                      GitHub
                    </Button>

                    <Button
                      icon={<LinkOutlined />}
                      href={project.demo}
                      target="_blank"
                      className="project-demo-button"
                      size="large"
                    >
                      Live Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
        </div>

        <div className="other-projects-section">
          <Title level={2} className="other-projects-title">
            More Projects
          </Title>

          <Row gutter={[24, 24]}>
            {projects
              .filter((project) => !project.featured)
              .map((project, index) => (
                <Col xs={24} md={12} key={index}>
                  <div className="mini-project-card">
                    <div className="mini-project-top">
                      <div>
                        <Paragraph className="mini-project-category">
                          {project.category}
                        </Paragraph>

                        <Title level={4} className="mini-project-title">
                          {project.title}
                        </Title>
                      </div>

                      <span className="mini-project-year">
                        {project.year}
                      </span>
                    </div>

                    <Paragraph className="mini-project-description">
                      {project.description}
                    </Paragraph>

                    <div className="mini-project-tags">
                      {project.tech.map((tech) => (
                        <Tag key={tech} className="mini-project-tag">
                          {tech}
                        </Tag>
                      ))}
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  );
}