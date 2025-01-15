import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import airaLogo from "../../Assets/Projects/aira.png"; // Add your AIRA logo image path here
import optibuddyLogo from "../../Assets/Projects/optibuddy.png"; // Add your Optibuddy logo image path here
import intersignLogo from "../../Assets/Projects/intersign.png"; // Add your Intersign logo image path here

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {/* AIRA Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airaLogo}
              isBlog={false}
              title="AIRA - Mental Health Supervision"
              description="A platform for mental health supervision using AI and real-time physiological signal tracking for early detection. Utilizes data from vital signs to monitor and predict health status."
              ghLink="https://github.com/elyes-thabet/aira" // Add GitHub link if available
              demoLink="https://airaapp.netlify.app/"
            />
          </Col>

          {/* Optibuddy Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={optibuddyLogo}
              isBlog={false}
              title="Optibuddy - ERP System with Smart Advisor"
              description="An industrial ERP powered system integrating sustainability goals with an intelligent virtual advisor for optimizing performance and operations in real-time."
              ghLink="https://github.com/elyes-thabet/optibuddy" // Add GitHub link if available
              demoLink="https://optibuddy.netlify.app/"
            />
          </Col>

          {/* Intersign Project */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={intersignLogo}
              isBlog={false}
              title="Intersign - Sign Language Translation via 3D Avatar"
              description="Developed an application using a 3D avatar to translate spoken language into sign language, aiming to assist deaf individuals in communication."
              ghLink="https://github.com/elyes-thabet/intersign" // Add GitHub link if available
              demoLink="https://intersign-app.netlify.app/" // Update demo link if applicable
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
