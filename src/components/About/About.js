import React from "react";
import {
  FiArrowUpRight,
  FiAward,
  FiBookOpen,
  FiGlobe,
  FiMapPin,
} from "react-icons/fi";
import ContactCTA from "../ContactCTA";
import Reveal from "../Reveal";
import {
  capabilities,
  education,
  experience,
  leadership,
  profile,
  publication,
} from "../../data/portfolio";

function About() {
  return (
    <main id="main-content" className="page page--about">
      <section className="page-hero page-hero--about">
        <div className="site-shell page-hero__inner">
          <Reveal>
            <span className="eyebrow">About Elyes</span>
            <h1>I work where physiology, computation, and real-world constraints meet.</h1>
            <p>
              My focus is not AI in isolation. It is the complete biomedical system: how a signal is sensed, cleaned, interpreted, embedded, evaluated, and translated into something a person can actually use.
            </p>
          </Reveal>
          <Reveal className="profile-stamp" delay={120}>
            <span className="profile-stamp__initials" aria-hidden="true">ET</span>
            <div>
              <strong>{profile.role}</strong>
              <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="profile-section" aria-labelledby="profile-heading">
        <div className="site-shell profile-grid">
          <Reveal className="profile-story">
            <span className="eyebrow">Research profile</span>
            <h2 id="profile-heading">Building evidence before building claims.</h2>
            <p>
              I am a fourth-year Biomedical Engineering student at ISTMT, University of Tunis El Manar. My work spans cervical-PPG silent speech, multimodal biosignal learning, embedded sensing, and the clinical translation of biosensors.
            </p>
            <p>
              Across placements with teams in Tunisia, Taiwan, and the United Kingdom, I have learned to pair rapid prototyping with careful interpretation: measure what the model can support, understand where it fails, and design the next experiment around that evidence.
            </p>
          </Reveal>

          <Reveal className="profile-facts" delay={100}>
            <div>
              <FiBookOpen aria-hidden="true" />
              <span>Research interests</span>
              <strong>Cross-subject generalisation, data-efficient learning, and multimodal EMG-IMU decoding</strong>
            </div>
            <div>
              <FiGlobe aria-hidden="true" />
              <span>Languages</span>
              <strong>Arabic (native), English (C1), French (fluent)</strong>
            </div>
            <div>
              <FiAward aria-hidden="true" />
              <span>Leadership</span>
              <strong>Executive Committee Chair, IEEE Computer Society Chapter at ISTMT</strong>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="education-section" aria-labelledby="education-heading">
        <div className="site-shell">
          <Reveal className="section-heading section-heading--split">
            <div>
              <span className="eyebrow">Education</span>
              <h2 id="education-heading">Biomedical engineering with a technological-innovation focus.</h2>
            </div>
            <span className="section-heading__aside">{education.period}</span>
          </Reveal>

          <Reveal className="education-card">
            <div className="education-card__institution">
              <span className="education-card__monogram" aria-hidden="true">IM</span>
              <div>
                <h3>{education.school}</h3>
                <p>{education.university}</p>
              </div>
            </div>
            <div className="education-card__details">
              <strong>{education.degree}</strong>
              <ul>
                {education.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="experience-section" aria-labelledby="experience-heading">
        <div className="site-shell experience-layout">
          <Reveal className="section-heading experience-layout__heading">
            <span className="eyebrow">Research experience</span>
            <h2 id="experience-heading">Learning across disciplines, institutions, and contexts.</h2>
            <p>Each placement added another layer: evidence synthesis, signal processing, embedded implementation, interpretability, and clinical context.</p>
          </Reveal>

          <ol className="timeline">
            {experience.map((item, index) => (
              <Reveal as="li" className="timeline__item" delay={index * 60} key={`${item.role}-${item.period}`}>
                <div className="timeline__marker" aria-hidden="true"><span /></div>
                <div className="timeline__period">
                  {item.current && <span className="current-badge"><i className="status-dot" /> Current</span>}
                  <time>{item.period}</time>
                </div>
                <div className="timeline__content">
                  <h3>{item.role}</h3>
                  <strong>{item.organisation}</strong>
                  <small>{item.location}</small>
                  <ul>
                    {item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="capabilities-section" aria-labelledby="capabilities-heading">
        <div className="site-shell">
          <Reveal className="section-heading">
            <span className="eyebrow">Capabilities</span>
            <h2 id="capabilities-heading">A toolkit organised by the problems it solves.</h2>
          </Reveal>

          <div className="capability-grid">
            {capabilities.map((group, index) => (
              <Reveal className="capability-card" delay={(index % 2) * 70} key={group.title}>
                <span className="capability-card__index">0{index + 1}</span>
                <h3>{group.title}</h3>
                <p>{group.summary}</p>
                <ul className="tag-list">
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="credentials-section" aria-label="Publication and leadership">
        <div className="site-shell credentials-grid">
          <Reveal className="credential-card credential-card--publication">
            <span className="eyebrow">Publication</span>
            <h2>{publication.title}</h2>
            <p>{publication.journal}</p>
            <a className="text-link" href={publication.doi} target="_blank" rel="noreferrer">
              Open DOI <FiArrowUpRight aria-hidden="true" />
            </a>
          </Reveal>

          <div className="leadership-list">
            {leadership.map((item, index) => (
              <Reveal className="leadership-card" delay={index * 60} key={item.title}>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.context}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
}

export default About;
