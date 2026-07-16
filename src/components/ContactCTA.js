import React from "react";
import { FiArrowUpRight, FiMail } from "react-icons/fi";
import Reveal from "./Reveal";
import { profile } from "../data/portfolio";

function ContactCTA() {
  return (
    <section className="contact-section" aria-labelledby="contact-heading">
      <div className="site-shell">
        <Reveal className="contact-card">
          <div>
            <span className="eyebrow">Build with purpose</span>
            <h2 id="contact-heading">Have a research or engineering challenge worth solving?</h2>
            <p>
              I am interested in biomedical AI, wearable sensing, embedded systems, and collaborations that move useful ideas toward real-world impact.
            </p>
          </div>
          <div className="contact-card__actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              <FiMail aria-hidden="true" /> Start a conversation
            </a>
            <a className="text-link" href={profile.linkedin} target="_blank" rel="noreferrer">
              Connect on LinkedIn <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ContactCTA;
