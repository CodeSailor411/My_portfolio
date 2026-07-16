import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import { FaBrain, FaWaveSquare } from "react-icons/fa";
import {
  SiC,
  SiEspressif,
  SiFlutter,
  SiPytorch,
  SiScikitlearn,
  SiStmicroelectronics,
  SiTensorflow,
} from "react-icons/si";

const skills = [
  ["Biosignals", FaWaveSquare],
  ["Python", DiPython],
  ["Embedded C", SiC],
  ["C++", CgCPlusPlus],
  ["PyTorch", SiPytorch],
  ["TensorFlow", SiTensorflow],
  ["scikit-learn", SiScikitlearn],
  ["STM32", SiStmicroelectronics],
  ["ESP32", SiEspressif],
  ["Flutter", SiFlutter],
  ["Multimodal AI", FaBrain],
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map(([name, Icon]) => (
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

export default Techstack;
