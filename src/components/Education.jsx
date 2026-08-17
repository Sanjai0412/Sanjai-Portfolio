import React from "react";
import FadeInSection from "./FadeInSection";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";

const educationHistory = [
  {
    duration: "2024 - 2026",
    degree: "Master of Computer Applications (MCA)",
    institution: "Dr. S.N.S. Rajalakshmi College of Arts and Science, Coimbatore",
  },
  {
    duration: "2021 - 2024 (75%)",
    degree: "Bachelor of Science, Computer Science",
    institution: "Jamal Mohamed College, Trichy",
  },
  {
    duration: "2020 - 2021 (80%)",
    degree: "HSC (Higher Secondary Certificate)",
    institution: "St. Thomas Hr Sec School, Pattukkottai",
  },
  {
    duration: "2018 - 2019 (70%)",
    degree: "SSLC (Secondary School Leaving Certificate)",
    institution: "St. Thomas Hr Sec School, Pattukkottai",
  },
];

const Education = () => {
  return (
    <div id="education">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ academic journey</span>
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
            paddingLeft: "30px",
            borderLeft: "2px solid var(--lightest-navy)",
          }}
        >
          {educationHistory.map((item, index) => (
            <FadeInSection key={index} delay={(index + 1) * 100 + "ms"}>
              <div
                style={{
                  marginBottom: "36px",
                  position: "relative",
                }}
              >
                {/* Timeline Dot */}
                <div
                  style={{
                    position: "absolute",
                    left: "-39px",
                    top: "4px",
                    width: "16px",
                    height: "16px",
                    borderRadius: "50%",
                    backgroundColor: "var(--green-bright)",
                    border: "3px solid var(--navy)",
                  }}
                />

                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: "var(--light-navy)",
                    color: "var(--green-bright)",
                    padding: "3px 12px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontFamily: "NTR, sans-serif",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    border: "1px solid var(--lightest-navy)",
                  }}
                >
                  {item.duration}
                </span>

                <div
                  style={{
                    color: "var(--lightest-slate)",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "4px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <SchoolRoundedIcon style={{ color: "var(--slate)", fontSize: 22 }} />
                  {item.degree}
                </div>

                <div
                  style={{
                    color: "var(--slate)",
                    fontSize: "16px",
                    marginTop: "4px",
                  }}
                >
                  {item.institution}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </FadeInSection>
    </div>
  );
};

export default Education;
