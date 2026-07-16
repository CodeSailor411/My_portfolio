import React from "react";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import SignalVisual from "../SignalVisual";

function ProjectVisual({ project }) {
  if (project.visual === "signal") return <SignalVisual compact />;

  if (project.visual === "motion") {
    return (
      <div className="project-visual project-visual--motion" aria-hidden="true">
        <div className="motion-grid">
          <span className="motion-grid__axis motion-grid__axis--x">X</span>
          <span className="motion-grid__axis motion-grid__axis--y">Y</span>
          <span className="motion-grid__axis motion-grid__axis--z">Z</span>
          <span className="motion-grid__trace motion-grid__trace--one" />
          <span className="motion-grid__trace motion-grid__trace--two" />
          <span className="motion-grid__subject" />
        </div>
        <div className="visual-caption">
          <span><i className="status-dot" /> IMU stream</span>
          <strong>Fall event classification</strong>
        </div>
      </div>
    );
  }

  if (project.visual === "gripper") {
    return (
      <div className="project-visual project-visual--gripper" aria-hidden="true">
        <div className="gripper-diagram">
          <span className="gripper-diagram__palm" />
          <span className="gripper-diagram__finger gripper-diagram__finger--one" />
          <span className="gripper-diagram__finger gripper-diagram__finger--two" />
          <span className="gripper-diagram__finger gripper-diagram__finger--three" />
          <span className="gripper-diagram__pulse" />
        </div>
        <div className="visual-caption">
          <span>Prototype 03</span>
          <strong>Grip / release control</strong>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual project-visual--access" aria-hidden="true">
      <div className="access-orbit">
        <span className="access-orbit__speech">VOICE</span>
        <span className="access-orbit__avatar">3D</span>
        <span className="access-orbit__sign">SIGN</span>
        <span className="access-orbit__line access-orbit__line--one" />
        <span className="access-orbit__line access-orbit__line--two" />
      </div>
      <div className="visual-caption">
        <span>Accessible interaction</span>
        <strong>Speech to visual signing</strong>
      </div>
    </div>
  );
}

function ProjectCard({ project, headingLevel = 2 }) {
  const Heading = headingLevel === 3 ? "h3" : "h2";

  return (
    <article className={`work-card${project.featured ? " work-card--featured" : ""}`}>
      <div className="work-card__visual">
        <ProjectVisual project={project} />
      </div>

      <div className="work-card__content">
        <span className="eyebrow">{project.eyebrow}</span>
        <Heading>{project.title}</Heading>
        <p className="work-card__summary">{project.summary}</p>
        <p className="work-card__contribution">{project.contribution}</p>

        {project.metrics && (
          <dl className="work-card__metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <dt>{metric.value}</dt>
                <dd>{metric.label}</dd>
              </div>
            ))}
          </dl>
        )}

        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>

        {project.links && (
          <div className="work-card__links">
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
                {link.type === "github" ? <FiGithub aria-hidden="true" /> : <FiExternalLink aria-hidden="true" />}
                {link.label}
                <FiArrowUpRight className="link-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
