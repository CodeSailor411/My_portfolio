import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt={props.imgAlt || `${props.title} project preview`}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <div className="project-links">
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${props.title} on GitHub`}
          >
            <BsGithub aria-hidden="true" /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open the ${props.title} live demo`}
            >
              <CgWebsite aria-hidden="true" /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
