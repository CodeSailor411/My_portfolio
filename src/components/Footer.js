import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/portfolio";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__inner">
        <div>
          <strong>Elyes Thabet</strong>
          <p>Biomedical engineering, biosignal processing, and wearable AI.</p>
        </div>

        <div className="site-footer__links" aria-label="Contact links">
          <a href={`mailto:${profile.email}`} aria-label={`Email ${profile.name}`}>
            <FiMail aria-hidden="true" />
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="Elyes Thabet on GitHub">
            <FiGithub aria-hidden="true" />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="Elyes Thabet on LinkedIn">
            <FiLinkedin aria-hidden="true" />
          </a>
        </div>

        <p className="site-footer__legal">Copyright {year} Elyes Thabet</p>
      </div>
    </footer>
  );
}

export default Footer;
