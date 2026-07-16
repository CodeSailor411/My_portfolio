import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container as="footer" fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Developed by Elyes Thabet</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>
            Copyright {String.fromCodePoint(0x00a9)} {year} Elyes Thabet
          </h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/CodeSailor411"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyes Thabet on GitHub"
              >
                <AiFillGithub aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/ElyesThabet"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyes Thabet on Twitter"
              >
                <AiOutlineTwitter aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/elyes-thabet-alchemist/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyes Thabet on LinkedIn"
              >
                <FaLinkedinIn aria-hidden="true" />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/elyes_thabet/"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyes Thabet on Instagram"
              >
                <AiFillInstagram aria-hidden="true" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
