import React from "react";
import { FiArrowUpRight, FiDownload, FiFileText, FiMail, FiMapPin } from "react-icons/fi";
import resumePdf from "../../Assets/resume.pdf";
import { profile } from "../../data/portfolio";
import Reveal from "../Reveal";

const resumeHighlights = [
  {
    label: "Focus",
    value: "Biosignal processing, wearable AI, and embedded biomedical systems",
  },
  {
    label: "Current",
    value: "Remote Research Intern at Queen's University Belfast",
  },
  {
    label: "Education",
    value: "Biomedical Engineering at ISTMT, expected 2027",
  },
];

function ResumeNew() {
  return (
    <main id="main-content" className="page page--resume">
      <section className="page-hero resume-hero">
        <div className="site-shell page-hero__inner">
          <Reveal>
            <span className="eyebrow">Resume | Updated July 2026</span>
            <h1>Research experience, engineering practice, and the evidence behind the work.</h1>
            <p>
              A concise overview of my biomedical engineering education, international research placements, selected projects, publication, and technical methods.
            </p>
            <div className="resume-hero__meta">
              <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
              <a href={`mailto:${profile.email}`}><FiMail aria-hidden="true" /> {profile.email}</a>
            </div>
          </Reveal>

          <Reveal className="resume-actions" delay={100}>
            <a className="button button--primary" href={resumePdf} download="Elyes-Thabet-Resume.pdf">
              <FiDownload aria-hidden="true" /> Download PDF
            </a>
            <a className="button button--secondary" href={resumePdf} target="_blank" rel="noreferrer">
              Open in new tab <FiArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="resume-overview" aria-label="Resume overview">
        <div className="site-shell resume-overview__grid">
          {resumeHighlights.map((highlight, index) => (
            <Reveal className="resume-highlight" delay={index * 70} key={highlight.label}>
              <span>{highlight.label}</span>
              <strong>{highlight.value}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="resume-preview-section" aria-labelledby="resume-preview-heading">
        <div className="site-shell">
          <Reveal className="resume-preview__heading section-heading section-heading--split">
            <div>
              <span className="eyebrow">Document preview</span>
              <h2 id="resume-preview-heading">Elyes Thabet - one-page resume</h2>
            </div>
            <span className="document-chip"><FiFileText aria-hidden="true" /> PDF | 1 page</span>
          </Reveal>

          <Reveal className="resume-document">
            <object data={resumePdf} type="application/pdf" aria-label="Elyes Thabet resume PDF">
              <div className="resume-document__fallback">
                <FiFileText aria-hidden="true" />
                <h3>Preview unavailable in this browser</h3>
                <p>You can open or download the resume directly.</p>
                <a className="button button--primary" href={resumePdf} target="_blank" rel="noreferrer">
                  Open resume <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
            </object>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

export default ResumeNew;
