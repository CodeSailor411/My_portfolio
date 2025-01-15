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
          Here are the projects I've successfully built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AiraLogo}
              isBlog={false}
              title="Aira"
              description="A mental health supervision platform that leverages AI for early detection using vital signs and physiological signals tracking."
              ghLink="https://github.com/CodeSailor411/Aira"
              demoLink="https://airaapp.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OptibuddyLogo}
              isBlog={false}
              title="Optibuddy"
              description="An industrial ERP system powered by a smart virtual advisor and advanced dashboard for better management."
              ghLink="https://github.com/CodeSailor411/optibuddy"
              demoLink="https://optibuddy.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={IntersignLogo}
              isBlog={false}
              title="Intersign"
              description="A desktop app with a 3D avatar that translates spoken language into sign language, helping deaf individuals communicate."
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
