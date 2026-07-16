import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import AiraLogo from "../../Assets/Projects/Aira.svg";
import OptibuddyLogo from "../../Assets/Projects/Optibuddy.svg";
import IntersignLogo from "../../Assets/Projects/Intersign.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of AI, engineering, and accessibility projects I have built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiraLogo}
              imgAlt="Aira mental health platform logo"
              isBlog={false}
              title="Aira"
              description="An AI-assisted mental health monitoring platform designed to support early risk detection through vital-sign and physiological-signal tracking."
              ghLink="https://github.com/CodeSailor411/Aira"
              demoLink="https://airaapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OptibuddyLogo}
              imgAlt="Optibuddy industrial ERP platform logo"
              isBlog={false}
              title="Optibuddy"
              description="An industrial ERP platform pairing operational dashboards with a smart virtual advisor to support clearer, faster management decisions."
              ghLink="https://github.com/CodeSailor411/optibuddy"
              demoLink="https://optibuddy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntersignLogo}
              imgAlt="Intersign sign-language accessibility application preview"
              isBlog={false}
              title="Intersign"
              description="A real-time accessibility application using multimodal AI and a 3D avatar to translate spoken language into sign language for deaf users."
              ghLink="https://github.com/CodeSailor411/InterSign-2"
              demoLink="https://intersign.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
