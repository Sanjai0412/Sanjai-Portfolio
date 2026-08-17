import React from "react";
import FadeInSection from "./FadeInSection";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";

const Achievements = () => {
  return (
    <div id="achievements">
      <FadeInSection>
        <div className="section-header">
          <span className="section-title">/ problem-solving progress</span>
        </div>
        <div
          style={{
            backgroundColor: "var(--light-navy)",
            borderRadius: "12px",
            padding: "32px",
            border: "1px solid var(--lightest-navy)",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            {/* Left Counter & Stats */}
            <div style={{ flex: "1 1 300px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "12px",
                }}
              >
                <CodeRoundedIcon style={{ color: "var(--green-bright)", fontSize: 32 }} />
                <h3 style={{ margin: 0, color: "var(--lightest-slate)", fontSize: "22px" }}>
                  LeetCode Progress
                </h3>
              </div>

              <div style={{ fontSize: "56px", fontWeight: "bold", color: "var(--green-bright)", lineHeight: "1.1" }}>
                237+
              </div>
              <div style={{ color: "var(--slate)", fontSize: "16px", marginTop: "4px", marginBottom: "24px" }}>
                Problems Solved & Growing Daily
              </div>

              <a
                href="https://leetcode.com/u/Sanjai_04/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  padding: "10px 20px",
                  backgroundColor: "transparent",
                  border: "1px solid var(--green-bright)",
                  color: "var(--green-bright)",
                  borderRadius: "4px",
                  fontSize: "14px",
                  fontWeight: "bold",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
              >
                View LeetCode Profile ↗
              </a>
            </div>

            {/* Right Bullet Descriptions */}
            <div
              style={{
                flex: "1 1 300px",
                borderLeft: "1px solid var(--lightest-navy)",
                paddingLeft: "24px",
              }}
            >
              <h4 style={{ color: "var(--lightest-slate)", fontSize: "18px", marginTop: 0 }}>
                Algorithmic Focus & Practice
              </h4>
              <ul
                style={{
                  color: "var(--slate)",
                  fontSize: "15px",
                  lineHeight: "1.8",
                  paddingLeft: "18px",
                  margin: 0,
                }}
              >
                <li>
                  Actively participate in LeetCode contests to solve algorithmic challenges under strict time constraints.
                </li>
                <li>
                  Focused on mastering core data structures, graph algorithms, dynamic programming, and optimization techniques.
                </li>
                <li>
                  Consistent daily practice ensuring strong technical problem solving for backend engineering.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Achievements;
