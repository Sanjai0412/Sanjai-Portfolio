import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";

const ExternalLinks = ({ githubLink, openLink, docsLink }) => {
  return (
    <span className="external-links">
      {githubLink && (
        <a
          className="github-icon"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub Repository"
          onClick={(e) => e.stopPropagation()}
        >
          <GitHubIcon
            sx={{
              fontSize: 20,
              color: "inherit",
            }}
          />
        </a>
      )}
      {docsLink && (
        <a
          className="docs-icon"
          href={docsLink}
          target="_blank"
          rel="noopener noreferrer"
          title="API Documentation"
          style={{ marginLeft: "12px" }}
          onClick={(e) => e.stopPropagation()}
        >
          <DescriptionRoundedIcon
            sx={{
              fontSize: 22,
              color: "inherit",
            }}
          />
        </a>
      )}
      {openLink && (
        <a
          className="open-icon"
          href={openLink}
          target="_blank"
          rel="noopener noreferrer"
          title="Live Demo"
          style={{ marginLeft: "12px" }}
          onClick={(e) => e.stopPropagation()}
        >
          <OpenInBrowserIcon
            sx={{
              fontSize: 24,
              color: "inherit",
            }}
          />
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
