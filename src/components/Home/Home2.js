import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a fourth-year <b className="purple">Biomedical Engineering</b>{" "}
              student researcher focused on{" "}
              <b className="purple">physiological signal processing</b>,{" "}
              multimodal biosignal learning, and wearable embedded systems.
              <br />
              <br />
              My hands-on work spans{" "}
              <b className="purple">
                cervical PPG silent-speech sensing, EEG, EMG, ECG, and IMU
                pipelines,
              </b>{" "}
              as well as STM32 and ESP32 embedded systems.
              <br />
              <br />
              My research also includes GREM1 evidence synthesis with Queen's
              University Belfast, clinical biosensor translation, and a
              co-authored review in{" "}
              <b className="purple">Biosensors and Bioelectronics.</b>
              <br />
              <br />
              I am especially interested in{" "}
              <b className="purple">
                cross-subject generalisation, data-efficient learning, and
                assistive interfaces.
              </b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} scale={1.02}>
              <img
                src={myImg}
                className="img-fluid"
                alt="Elyes Thabet working at a computer illustration"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CodeSailor411"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Visit Elyes Thabet's GitHub profile"
                >
                  <AiFillGithub aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/elyes_thabet"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Visit Elyes Thabet on Twitter"
                >
                  <AiOutlineTwitter aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/elyes-thabet-alchemist/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Visit Elyes Thabet's LinkedIn profile"
                >
                  <FaLinkedinIn aria-hidden="true" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/elyes_thabet/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Visit Elyes Thabet's Instagram profile"
                >
                  <AiFillInstagram aria-hidden="true" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
