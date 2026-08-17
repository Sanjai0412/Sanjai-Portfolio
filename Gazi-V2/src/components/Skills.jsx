import React from "react";
import FadeInSection from "./FadeInSection";
import "../styles/Projects.css";

const skillCategories = [
  {
    number: "01",
    title: "Languages & Frontend",
    skills: ["Java", "JavaScript", "React 18", "Vite", "HTML5 & CSS3", "SQL"],
  },
  {
    number: "02",
    title: "Backend & Database",
    skills: [
      "Java Jersey (JAX-RS)",
      "Node.js & Express",
      "PostgreSQL (HikariCP)",
      "REST APIs",
      "JWT Authentication",
      "Brevo API",
    ],
  },
  {
    number: "03",
    title: "Tools & Deployment",
    skills: ["Vercel & Railway", "Cloudinary", "Git & GitHub", "Postman", "VS Code"],
  },
];

const Skills = () => {
  return (
    <div id="skills">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ technical toolbox</span>
        </div>
        <div className="project-container">
          <ul className="projects-grid">
            {skillCategories.map((category, i) => (
              <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                <li className="projects-card">
                  <div className="card-header" style={{ marginBottom: "10px" }}>
                    <span
                      style={{
                        fontFamily: "NTR, sans-serif",
                        fontSize: "24px",
                        color: "var(--green-bright)",
                        fontWeight: "bold",
                      }}
                    >
                      {category.number}
                    </span>
                  </div>
                  <div className="card-title" style={{ fontSize: "20px", marginBottom: "16px" }}>
                    {category.title}
                  </div>
                  <div className="card-tech">
                    {category.skills.map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          display: "inline-block",
                          backgroundColor: "var(--light-navy)",
                          color: "var(--slate)",
                          padding: "6px 12px",
                          borderRadius: "16px",
                          fontSize: "13px",
                          marginRight: "8px",
                          marginBottom: "8px",
                          border: "1px solid var(--lightest-navy)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Skills;
