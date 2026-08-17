import React from "react";

import "../styles/SidebarNav.css";
import FadeInSection from "./FadeInSection";

import { useMediaQuery } from "@mui/material";

const SidebarNav = () => {
  const isMobile = useMediaQuery("(max-width: 800px)");
  const links = [
    <a key="1" href="/#intro"><span className="nav-slash">/</span>home</a>,
    <a key="2" href="/#about"><span className="nav-slash">/</span>about</a>,
    <a key="3" href="/#skills"><span className="nav-slash">/</span>skills</a>,
    <a key="4" href="/#projects"><span className="nav-slash">/</span>projects</a>,
    <a key="5" href="/#achievements"><span className="nav-slash">/</span>achievements</a>,
    <a key="6" href="/#education"><span className="nav-slash">/</span>education</a>
  ];

  return (
    <div className="sidebar-nav">
      {!isMobile && (
        <div className="sidebar-links">
          {links.map((link, i) => (
            <FadeInSection key={i} delay={(i + 1) * 100 + "ms"}>
              <div>{link}</div>
            </FadeInSection>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarNav;
