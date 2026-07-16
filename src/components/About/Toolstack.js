import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAutodesk,
  SiFlutter,
  SiLinux,
  SiStmicroelectronics,
  SiVisualstudiocode,
} from "react-icons/si";

const tools = [
  ["Linux", SiLinux],
  ["VS Code", SiVisualstudiocode],
  ["Fusion 360", SiAutodesk],
  ["STM32 tools", SiStmicroelectronics],
  ["Flutter", SiFlutter],
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(([name, Icon]) => (
        <Col
          key={name}
          xs={4}
          md={2}
          className="tech-icons"
          title={name}
          role="img"
          aria-label={name}
        >
          <Icon aria-hidden="true" />
          <span className="tech-icon-label">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
