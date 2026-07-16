import React from "react";
import {
  FiActivity,
  FiArrowRight,
  FiArrowUpRight,
  FiBookOpen,
  FiCpu,
  FiDownload,
  FiMapPin,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import resumePdf from "../../Assets/resume.pdf";
import {
  profile,
  projects,
  proofPoints,
  publication,
} from "../../data/portfolio";
import ContactCTA from "../ContactCTA";
import Reveal from "../Reveal";
import SignalVisual from "../SignalVisual";
import ProjectCard from "../Projects/ProjectCards";

const focusAreas = [
  {
    icon: FiActivity,
    number: "01",
    title: "Read the signal",
    text: "PPG, EEG, EMG, ECG, and IMU pipelines that turn noisy physiological data into interpretable features.",
  },
  {
    icon: FiCpu,
    number: "02",
    title: "Build the system",
    text: "Embedded acquisition and AI workflows that connect STM32 and ESP32 hardware to useful applications.",
  },
  {
    icon: FiBookOpen,
    number: "03",
    title: "Translate the evidence",
    text: "Research synthesis and standards-aware thinking that ask what it takes to move from a lab result to real use.",
  },
];

function Home() {
  return (
    <main id="main-content" className="page page--home">
      <section className="hero" aria-labelledby="hero-heading">
        <div className="site-shell hero__grid">
          <Reveal className="hero__copy is-visible">
            <div className="hero__availability">
              <span className="status-dot" />
              Researching at Queen's University Belfast
            </div>
            <p className="eyebrow">Biomedical engineering + intelligent systems</p>
            <h1 id="hero-heading">
              Engineering systems that <span>listen to the body.</span>
            </h1>
            <p className="hero__lead">
              I am {profile.name}, a fourth-year Biomedical Engineering student building wearable biosensing, embedded AI, and assistive interfaces from signal acquisition through deployment.
            </p>

            <div className="hero__actions">
              <Link className="button button--primary" to="/project">
                Explore selected work <FiArrowRight aria-hidden="true" />
              </Link>
              <a className="button button--secondary" href={resumePdf} download="Elyes-Thabet-Resume.pdf">
                <FiDownload aria-hidden="true" /> Download resume
              </a>
            </div>

            <div className="hero__meta">
              <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
              <span>Biosignals, AI, and embedded biomedical systems</span>
            </div>
          </Reveal>

          <Reveal className="hero__visual is-visible" delay={120}>
            <SignalVisual />
            <div className="hero__research-note">
              <span>Current research</span>
              <strong>GREM1 evidence synthesis in human cancer</strong>
              <small>Jun. 22 - Jul. 31, 2026 | Remote</small>
            </div>
          </Reveal>
        </div>

        <a className="hero__scroll" href="#proof" aria-label="Scroll to highlights">
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section id="proof" className="proof-section" aria-label="Selected achievements">
        <div className="site-shell proof-grid">
          {proofPoints.map((point, index) => (
            <Reveal className="proof-card" delay={index * 70} key={point.label}>
              <strong>{point.value}</strong>
              <div>
                <span>{point.label}</span>
                <small>{point.detail}</small>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="featured-section" aria-labelledby="featured-heading">
        <div className="site-shell">
          <Reveal className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Selected systems</span>
              <h2 id="featured-heading">Work that crosses hardware, data, and human need.</h2>
            </div>
            <Link className="text-link" to="/project">
              View all projects <FiArrowRight aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="home-work-grid">
            {projects.slice(0, 3).map((project, index) => (
              <Reveal delay={index * 70} key={project.id}>
                <ProjectCard project={project} headingLevel={3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="focus-section" aria-labelledby="focus-heading">
        <div className="site-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">How I think</span>
            <h2 id="focus-heading">One problem, viewed across the full stack.</h2>
            <p>
              Biomedical systems fail when sensing, modelling, implementation, and translation are treated as separate worlds. My work is about connecting them.
            </p>
          </Reveal>

          <div className="focus-grid">
            {focusAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Reveal className="focus-card" delay={index * 80} key={area.title}>
                  <div className="focus-card__topline">
                    <span><Icon aria-hidden="true" /></span>
                    <small>{area.number}</small>
                  </div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="publication-section" aria-labelledby="publication-heading">
        <div className="site-shell">
          <Reveal className="publication-card">
            <div className="publication-card__mark" aria-hidden="true">B&B</div>
            <div className="publication-card__content">
              <span className="eyebrow">Peer-reviewed publication | 2026</span>
              <h2 id="publication-heading">{publication.title}</h2>
              <p>{publication.journal} - {publication.contribution}</p>
            </div>
            <a className="publication-card__link" href={publication.doi} target="_blank" rel="noreferrer">
              Read publication <FiArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

export default Home;
