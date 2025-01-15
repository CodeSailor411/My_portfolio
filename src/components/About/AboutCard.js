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
            I am currently a biomedical engineering student with a focus on AI, machine learning, and sustainability.
            <br />
            <br />
            Apart from coding and engineering, some activities I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and sustainability projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Participating in hackathons
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling and learning new cultures
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
