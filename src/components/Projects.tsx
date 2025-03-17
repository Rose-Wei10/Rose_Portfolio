// components/Projects.tsx
import { Card, Typography, Tag, Button, Carousel } from 'antd';
import { GithubOutlined, LinkOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { useEffect, useRef, useState } from 'react';
import type { CarouselRef } from 'antd/es/carousel';
import '../styles/projects.css';

const { Title, Paragraph } = Typography;

export default function Projects() {
  // Use Ant Design's CarouselRef type
  const carouselRef = useRef<CarouselRef>(null);
  
  // Refs for the image galleries within projects
  const imageCarouselRefs = useRef<(CarouselRef | null)[]>([]);
  
  // Track current slide for manual control
  const [activeSlide, setActiveSlide] = useState(0);

  const projects = [
    {
      title: 'Anniversary Report Tool',
      description: 'GeoEngineers | Corporate Alliance Program • Sept 2023 - June 2024',
      longDescription: [
        'Engineered an automated tracking system using React and PostgreSQL, streamlining employee milestone recognition.',
        'Developed a real-time notification system for anniversaries and milestones with Node.js, enhancing HR engagement and efficiency.'
      ],
      tech: ['React', 'PostgreSQL', 'Node.js'],
      github: 'https://github.com/yourusername/anniversary-tool',
      demo: 'https://anniversary-tool-demo.com',
      images: ['/geoEngineerSnap.png']
    },
    {
      title: 'Cross-Platform Dictionary Application',
      description: 'Personal Project • May 2023 - June 2023',
      longDescription: [
        'Developed a mobile dictionary application using React Native and JavaScript, featuring dynamic theme switching and customizable font selection to enhance user experience.',
        'Engineered robust error handling and unit tests for all components with Jest and REST APIs, ensuring reliability and performance.'
      ],
      tech: ['React Native', 'JavaScript', 'REST API'],
      github: 'https://github.com/yourusername/dictionary-app',
      demo: 'https://dictionary-app-demo.com',
      images: ['/api/placeholder/800/400']
    },
    {
      title: "The Wizard's Apprentice",
      description: 'Game Development • Sept 2023 - Dec 2023',
      longDescription: [
        'Architected and developed a 3D platformer combat game using C# and Unity, featuring progressive ability unlocking and engaging combat mechanics.',
        'Designed and implemented a health system, scoring mechanism, and multi-level progression with Unity and 3D modeling, enhancing gameplay experience.'
      ],
      tech: ['C#', 'Unity', '3D Modeling'],
      github: 'https://github.com/yourusername/wizards-apprentice',
      demo: 'https://wizards-apprentice-demo.com',
      images: [
        '/start_screen.png'
      ]
    }
  ];

  // Initialize the image carousel refs
  useEffect(() => {
    imageCarouselRefs.current = imageCarouselRefs.current.slice(0, projects.length);
  }, [projects.length]);

  // Manual control for carousel with 10-second interval
  useEffect(() => {
    // Use a direct timeout approach instead of interval
    const timeoutId = setTimeout(() => {
      const nextSlide = (activeSlide + 1) % projects.length;
      if (carouselRef.current) {
        carouselRef.current.goTo(nextSlide);
      }
    }, 10000); // Exactly 10 seconds
    
    // Clean up on unmount or when slide changes
    return () => {
      clearTimeout(timeoutId);
    };
  }, [activeSlide, projects.length]);

  // Navigate image gallery
  const navigateImageGallery = (projectIndex: number, direction: 'prev' | 'next') => {
    const carousel = imageCarouselRefs.current[projectIndex];
    if (carousel) {
      if (direction === 'prev') {
        carousel.prev();
      } else {
        carousel.next();
      }
    }
  };

  return (
    <div className="projects-background">
      <div className="projects-container">
        <Title level={1} className="projects-title">
          Projects
        </Title>
        
        <div className="carousel-container">
          <Carousel
            ref={carouselRef}
            autoplay={false} // We handle autoplay manually
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={1}
            slidesToScroll={1}
            className="projects-carousel"
            afterChange={(currentSlide) => {
              console.log("Slide changed to:", currentSlide);
              setActiveSlide(currentSlide);
            }}
          >
            {projects.map((project, index) => (
              <div className="carousel-slide" key={index}>
                <Card
                  className="project-card"
                  cover={
                    <div className="project-image-container">
                      {project.images.length > 1 ? (
                        <>
                          <Carousel
                            autoplay={false}
                            dots={true}
                            infinite={true}
                            speed={500}
                            ref={(ref) => {
                              imageCarouselRefs.current[index] = ref;
                            }}
                            className="image-gallery-carousel"
                          >
                            {project.images.map((image, imgIndex) => (
                              <div key={imgIndex} className="gallery-image-wrapper">
                                <img
                                  alt={`${project.title} screenshot ${imgIndex + 1}`}
                                  src={image}
                                  className="project-image"
                                />
                              </div>
                            ))}
                          </Carousel>
                          
                          {/* Image navigation buttons */}
                          <div className="image-gallery-controls">
                            <button 
                              className="gallery-control-button prev-button"
                              onClick={() => navigateImageGallery(index, 'prev')}
                              aria-label="Previous image"
                            >
                              <LeftOutlined />
                            </button>
                            <button 
                              className="gallery-control-button next-button"
                              onClick={() => navigateImageGallery(index, 'next')}
                              aria-label="Next image"
                            >
                              <RightOutlined />
                            </button>
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            alt={project.title}
                            src={project.images[0]}
                            className="project-image"
                          />
                        </>
                      )}
                      <div className="project-overlay"></div>
                    </div>
                  }
                  bordered={false}
                >
                  <Title level={3} className="project-card-title">{project.title}</Title>
                  <Paragraph className="project-card-subtitle">{project.description}</Paragraph>
                  
                  <div className="project-description-list">
                    {project.longDescription.map((desc, i) => (
                      <Paragraph key={i} className="project-card-description-item">
                        • {desc}
                      </Paragraph>
                    ))}
                  </div>
                  
                  <div className="project-tags">
                    {project.tech.map((tech) => (
                      <Tag className="project-tag" key={tech}>
                        {tech}
                      </Tag>
                    ))}
                  </div>
                  
                  <div className="project-buttons">
                    <Button
                      className="github-button"
                      icon={<GithubOutlined />}
                      href={project.github}
                      target="_blank"
                      size="large"
                    >
                      GitHub
                    </Button>
                    <Button
                      className="demo-button"
                      icon={<LinkOutlined />}
                      href={project.demo}
                      target="_blank"
                      size="large"
                    >
                      Live Demo
                    </Button>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="projects-decoration">
        <div className="circle-decoration circle-1"></div>
        <div className="circle-decoration circle-2"></div>
      </div>
    </div>
  );
}