import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

const About = () => {
  const one = (
    <p>
      I am a <b>Software Engineer</b> pursuing my <b>Master of Computer Applications (MCA)</b> at Dr. S.N.S. Rajalakshmi College of Arts and Science, Coimbatore. I hold a B.Sc in Computer Science from Jamal Mohamed College, Trichy.
    </p>
  );
  const two = (
    <p>
      I specialize in constructing robust microservices, designing relational schemas, and developing reactive frontends. When I'm not coding, I'm actively sharpening my data structure and algorithm skills on LeetCode.
    </p>
  );

  const techStack = [
    "Java 17",
    "JavaScript (ES6+)",
    "React 18",
    "Node.js & Express",
    "Java Jersey (JAX-RS)",
    "PostgreSQL",
    "REST APIs",
    "JWT Authentication",
  ];

  return (
    <div id="about">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ about me</span>
        </div>
        <div className="about-content">
          <div className="about-description">
            {one}
            {"Here are some technologies I have been working with:"}
            <ul className="tech-stack">
              {techStack.map((techItem, i) => (
                <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
                  <li>{techItem}</li>
                </FadeInSection>
              ))}
            </ul>
            {two}
          </div>
          <div className="about-image">
            <img alt="Sanjaikanth T." src={"/profile_original.jpg"} />
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default About;
