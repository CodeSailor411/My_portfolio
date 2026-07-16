import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Elyes Thabet</span> from{" "}
            <span className="purple">Tunis, Tunisia.</span>
            <br />
            I am a fourth-year Biomedical Engineering student at the Higher
            Institute of Medical Technologies of Tunis, focused on biosignal
            processing, wearable AI, and embedded systems.
            <br />
            <br />
            Beyond my coursework, I stay involved through:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Building biosignal and embedded-system prototypes
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Leading IEEE Computer Society technical workshops
            </li>
            <li className="about-activity">
              <ImPointRight aria-hidden="true" /> Exploring assistive interfaces and responsible AI
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to develop solutions that make a meaningful impact!"{" "}
          </p>
          <footer className="blockquote-footer">Elyes Thabet</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
