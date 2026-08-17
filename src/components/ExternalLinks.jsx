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
          style={{ marginLeft: "10px" }}
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
        >
          <OpenInBrowserIcon
            sx={{
              fontSize: 25,
              color: "inherit",
            }}
          />
        </a>
      )}
    </span>
  );
};

export default ExternalLinks;
