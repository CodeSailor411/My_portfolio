import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImLinkedin } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  useEffect(() => {
    const scrollHandler = () => updateNavbar(window.scrollY >= 20);

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });

    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex"
          aria-label="Elyes Thabet home"
        >
          <img src={logo} className="img-fluid logo" alt="Elyes Thabet Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label={expand ? "Close navigation" : "Open navigation"}
          onClick={() => updateExpanded((isExpanded) => !isExpanded)}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/elyes-thabet-alchemist/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImLinkedin style={{ marginBottom: "2px" }} /> LinkedIn
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/CodeSailor411"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Elyes Thabet on GitHub"
                className="fork-btn-inner"
              >
                <CgGitFork aria-hidden="true" style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar aria-hidden="true" style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
