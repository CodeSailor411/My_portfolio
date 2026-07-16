import React from "react";
import { FiActivity, FiCpu, FiLayers, FiRepeat } from "react-icons/fi";
import ContactCTA from "../ContactCTA";
import Reveal from "../Reveal";
import { projects } from "../../data/portfolio";
import ProjectCard from "./ProjectCards";

const approach = [
  {
    icon: FiActivity,
    title: "Sense",
    text: "Acquire physiological and motion data with hardware-aware signal-quality checks.",
  },
  {
    icon: FiLayers,
    title: "Interpret",
    text: "Transform noisy time series into representations that models can learn from.",
  },
  {
    icon: FiCpu,
    title: "Deploy",
    text: "Connect embedded acquisition, inference, and human-facing applications end to end.",
  },
  {
    icon: FiRepeat,
    title: "Validate",
    text: "Iterate against performance, usability, reproducibility, and translation constraints.",
  },
];

function Projects() {
  return (
    <main id="main-content" className="page page--work">
      <section className="page-hero">
        <div className="site-shell page-hero__inner">
          <Reveal>
            <span className="eyebrow">Selected work</span>
            <h1>Research and engineering built around real human signals.</h1>
            <p>
              From neck-worn PPG and embedded motion sensing to assistive prototypes, each project connects evidence, hardware, software, and the person using the system.
            </p>
          </Reveal>
          <Reveal className="page-hero__index" delay={120} aria-hidden="true">
            <span>04</span>
            <small>selected systems</small>
          </Reveal>
        </div>
      </section>

      <section className="work-section" aria-label="Selected projects">
        <div className="site-shell work-grid">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={(index % 2) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="approach-section" aria-labelledby="approach-heading">
        <div className="site-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Working method</span>
            <h2 id="approach-heading">A system is only useful when every layer connects.</h2>
          </Reveal>

          <div className="approach-grid">
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal className="approach-card" delay={index * 70} key={item.title}>
                  <span className="approach-card__icon"><Icon aria-hidden="true" /></span>
                  <span className="approach-card__number">0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

export default Projects;
