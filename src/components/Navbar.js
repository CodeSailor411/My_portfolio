import React, { useEffect, useState } from "react";
import { FiFileText, FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useLocation } from "react-router-dom";
import { profile } from "../data/portfolio";

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [pathname]);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setExpanded(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("nav-open", expanded);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("nav-open");
    };
  }, [expanded]);

  const navigation = [
    { to: "/", label: "Home", end: true },
    { to: "/project", label: "Work" },
    { to: "/about", label: "About" },
    { to: "/resume", label: "Resume" },
  ];

  return (
    <header className={`site-nav${scrolled ? " site-nav--scrolled" : ""}`}>
      <div className="site-shell site-nav__inner">
        <Link className="brand" to="/" aria-label="Elyes Thabet - home">
          <span className="brand__mark" aria-hidden="true">ET</span>
          <span className="brand__copy">
            <strong>Elyes Thabet</strong>
            <small>Biomedical systems</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={expanded ? "Close navigation" : "Open navigation"}
          aria-expanded={expanded}
          aria-controls="primary-navigation"
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links${expanded ? " nav-links--open" : ""}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `nav-link${isActive ? " nav-link--active" : ""}`}
              to={item.to}
              end={item.end}
            >
              {item.label}
            </NavLink>
          ))}

          <span className="nav-links__divider" aria-hidden="true" />

          <a
            className="nav-icon-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Elyes Thabet on LinkedIn"
          >
            <FiLinkedin aria-hidden="true" />
          </a>
          <a
            className="nav-icon-link"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Elyes Thabet on GitHub"
          >
            <FiGithub aria-hidden="true" />
          </a>
          <Link className="nav-resume-link" to="/resume">
            <FiFileText aria-hidden="true" /> CV
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
