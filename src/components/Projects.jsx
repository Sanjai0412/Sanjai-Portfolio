import React, { useState } from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@mui/icons-material/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import ExternalLinks from "./ExternalLinks";
import { Modal, Button, Carousel } from "react-bootstrap";

const projectsList = [
  {
    id: "pingx",
    image: "/projects/pingx.png",
    title: "PingX – Full-Stack Social Media Platform",
    shortDesc:
      "A Twitter/X-inspired full-stack platform featuring activity feeds, IntersectionObserver infinite scroll, real-time notifications, and in-memory JWT authentication.",
    techStack:
      "Java 17, Jersey JAX-RS, PostgreSQL, React 18, Cloudinary, Vercel, Railway",
    link: "https://github.com/Sanjai0412/pingx",
    open: "https://pingx-sanjaii04.vercel.app/",
    docs: "https://github.com/Sanjai0412/pingx#readme",
    details: [
      "Activity Feed & Infinite Scroll: Activity-based timeline with performance-optimized IntersectionObserver pagination (usePaginatedFeed) supporting original tweets, retweets, and quote tweets.",
      "Database Indexing Optimization: Reduced feed generation and notification query latency using PostgreSQL B-tree composite indexes on high-throughput columns (user_id, created_at DESC, followed_id).",
      "In-Memory Token Security: Zero-localStorage model keeping access tokens in application memory with background Axios interceptors for transparent HttpOnly cookie refresh.",
      "Real-time Notification Engine: Automatic notification triggers for Follows, Likes, Retweets, Quotes, and Replies with unread badge counter.",
    ],
  },
  {
    id: "auth-service",
    title: "Auth Service – Standalone Authentication Microservice",
    shortDesc:
      "A decoupled authentication microservice handling user registration, Brevo API 6-digit email OTP verification, and JWT session lifecycles.",
    techStack:
      "Node.js, Express.js, PostgreSQL, JWT, Brevo API, Bcrypt.js, Railway",
    link: "https://github.com/Sanjai0412/auth-service",
    open: null,
    details: [
      "Dual-Token Hybrid Security: Issues short-lived 15-minute in-memory access tokens alongside 7-day stateful refresh tokens stored in HttpOnly cookies and PostgreSQL.",
      "Database Indexing Optimization: Fast user authentication, OTP validation, and session lookup using targeted PostgreSQL B-tree indexes.",
      "Brevo API Email Verification: Automated 6-digit OTP delivery using Brevo Transactional Email API (@getbrevo/brevo) with 10-minute expiration.",
    ],
  },
  {
    id: "google-split",
    title: "Google Split – Expense Sharing Backend System",
    shortDesc:
      "REST-based backend system for managing group expenses, settlements, and balance calculations.",
    techStack: "Java, Jersey, PostgreSQL, REST APIs",
    link: "https://github.com/Sanjai0412/Google-split",
    open: null,
    details: [
      "Built RESTful APIs for group management, expense tracking, and settlements.",
      "Structured the system using layered architecture (DAO, Service, Resource).",
      "Designed normalized PostgreSQL schema with foreign key constraints.",
      "Implemented automated balance calculation logic.",
    ],
  },
  {
    id: "taxi-booking",
    title: "Taxi Booking Backend System",
    shortDesc:
      "RESTful backend system handling ride lifecycle, driver assignment, and state transitions.",
    techStack: "Java, Jersey, PostgreSQL, SQL",
    link: "https://github.com/Sanjai0412/taxibooking",
    open: null,
    details: [
      "Developed APIs for ride booking, authentication, and driver assignment.",
      "Implemented controlled ride state transitions to maintain data integrity.",
      "Used SQL JOINs and aggregate queries for ride analytics.",
    ],
  },
  {
    id: "chat-app",
    image: "/projects/chat.png",
    title: "Real-time Chat App",
    shortDesc:
      "A full-stack chat application supporting real-time messaging using WebSockets and the MERN stack.",
    techStack: "Node.js, Express.js, WebSockets, MongoDB",
    link: "https://github.com/Sanjai0412/Chat-App",
    open: "https://sanjai-chat-app.onrender.com/",
    details: [
      "Built a full-stack chat application from scratch, enabling multiple concurrent users to exchange messages in real-time.",
      "Implemented a server-client architecture using Node.js and Express.js with WebSockets.",
      "Designed a MongoDB schema for user information and message history persistence.",
    ],
  },
  {
    id: "snake-game",
    image: "/projects/snake.png",
    title: "Classic Snake Game",
    shortDesc:
      "A complete snake game clone with high score tracking, sound effects, and responsive controls, built with pure JavaScript.",
    techStack: "HTML5 Canvas, JavaScript, Game Logic",
    link: "https://github.com/Sanjai0412/Snake-Game-using-Canvas",
    open: "https://sanjai0412.github.io/Snake-Game-using-Canvas/",
    details: [
      "Developed complete game logic, including snake movement, food generation, and collision detection.",
      "Implemented score tracking and localStorage high score retention.",
      "Integrated audio feedback for key game events.",
    ],
  },
  {
    id: "brick-breaker",
    image: "/projects/brick-breakers.png",
    title: "Brick Breaker Game",
    shortDesc:
      "An interactive brick-breaker game with polished UX, audio feedback, and precise collision detection using HTML5 Canvas.",
    techStack: "HTML5 Canvas, JavaScript, Collision Detection",
    link: "https://github.com/Sanjai0412/Brick-Breakers",
    open: "https://sanjai0412.github.io/Brick-Breakers/",
    details: [
      "Created fully interactive brick-breaker game managing paddle, ball, and brick states.",
      "Implemented precise collision detection algorithms.",
      "Smooth animations and responsive audio feedback.",
    ],
  },
];

const spotlightIds = ["pingx", "chat-app", "snake-game", "brick-breaker"];
const spotlightProjects = projectsList.filter((p) => spotlightIds.includes(p.id));
const otherProjects = projectsList.filter((p) => !spotlightIds.includes(p.id));

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div id="projects">
      <div className="section-header">
        <span className="section-title">/ featured projects</span>
        <a
          href="https://github.com/Sanjai0412"
          className="explore-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View all on GitHub
        </a>
      </div>

      {/* Featured Spotlight Carousel */}
      <FadeInSection>
        <div className="spotlight-carousel-container">
          <Carousel interval={null} pause="hover" className="spotlight-carousel">
            {spotlightProjects.map((project) => (
              <Carousel.Item key={project.id}>
                <div
                  className="spotlight-slide"
                  onClick={() => setSelectedProject(project)}
                >
                  {project.image ? (
                    <div className="spotlight-image-backdrop">
                      <img src={project.image} alt={project.title} className="spotlight-bg-image" />
                      <div className="spotlight-image-overlay">
                        <h2 className="spotlight-title">{project.title}</h2>
                        <p className="spotlight-desc">{project.shortDesc}</p>
                        <div className="spotlight-details-hint">
                          Click for details →
                        </div>
                        <div
                          className="spotlight-links"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLinks
                            githubLink={project.link}
                            openLink={project.open}
                            docsLink={project.docs}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="spotlight-content-fallback">
                      <div className="folder-icon mb-3">
                        <FolderOpenRoundedIcon sx={{ fontSize: 45 }} />
                      </div>
                      <h2 className="spotlight-title">{project.title}</h2>
                      <p className="spotlight-desc">{project.shortDesc}</p>
                      <div className="spotlight-tech">{project.techStack}</div>
                      <div className="spotlight-details-hint">
                        Click for details →
                      </div>
                      <div
                        className="spotlight-links"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLinks
                          githubLink={project.link}
                          openLink={project.open}
                          docsLink={project.docs}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </FadeInSection>

      {/* Other Projects Grid */}
      <div className="project-container">
        <ul className="projects-grid">
          {otherProjects.map((project, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <li
                className="projects-card"
                style={{ cursor: "pointer" }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="card-header">
                  <div className="folder-icon">
                    <FolderOpenRoundedIcon sx={{ fontSize: 35 }} />
                  </div>
                  <ExternalLinks
                    githubLink={project.link}
                    openLink={project.open}
                    docsLink={project.docs}
                  />
                </div>

                <div className="card-title">{project.title}</div>
                <div className="card-desc">{project.shortDesc}</div>
                <div
                  className="spotlight-details-hint"
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    marginTop: "12px",
                    marginBottom: "12px",
                    textAlign: "left",
                  }}
                >
                  Click for details →
                </div>
                <div className="card-tech">{project.techStack}</div>
              </li>
            </FadeInSection>
          ))}
        </ul>
      </div>

      {selectedProject && (
        <Modal
          show={!!selectedProject}
          onHide={() => setSelectedProject(null)}
          centered
          size="lg"
          contentClassName="bg-dark text-light border-secondary"
        >
          <Modal.Header closeButton closeVariant="white">
            <Modal.Title style={{ color: "var(--green-bright)" }}>
              {selectedProject.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p style={{ color: "var(--slate)", fontSize: "17px", lineHeight: "1.6" }}>
              {selectedProject.shortDesc}
            </p>
            <h6 style={{ color: "var(--lightest-slate)", fontSize: "18px", marginTop: "18px", marginBottom: "12px", fontWeight: "bold" }}>
              Key Engineering & Architecture Highlights:
            </h6>
            <ul style={{ color: "var(--slate)", paddingLeft: "20px" }}>
              {selectedProject.details.map((detail, idx) => (
                <li key={idx} style={{ marginBottom: "10px", fontSize: "16px", lineHeight: "1.6" }}>
                  {detail}
                </li>
              ))}
            </ul>
            <div style={{ marginTop: "18px", fontSize: "16px" }}>
              <strong>Tech Stack: </strong>
              <span style={{ color: "var(--green-bright)" }}>
                {selectedProject.techStack}
              </span>
            </div>
          </Modal.Body>
          <Modal.Footer>
            {selectedProject.open && (
              <Button
                variant="outline-info"
                href={selectedProject.open}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo ↗
              </Button>
            )}
            {selectedProject.docs && (
              <Button
                variant="outline-success"
                href={selectedProject.docs}
                target="_blank"
                rel="noopener noreferrer"
              >
                API Docs
              </Button>
            )}
            {selectedProject.link && (
              <Button
                variant="outline-light"
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </Button>
            )}
            <Button
              variant="secondary"
              onClick={() => setSelectedProject(null)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Projects;
