import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import resumePdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const MAX_RESUME_WIDTH = 1040;

function getResumeWidth() {
  if (typeof window === "undefined") return MAX_RESUME_WIDTH;

  return Math.max(280, Math.min(MAX_RESUME_WIDTH, window.innerWidth - 32));
}

function ResumeNew() {
  const [width, setWidth] = useState(getResumeWidth);

  useEffect(() => {
    const updateWidth = () => setWidth(getResumeWidth());

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumePdf}
            download="Elyes_Thabet_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload aria-hidden="true" />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document
            file={resumePdf}
            className="d-flex justify-content-center"
            aria-label="Preview of Elyes Thabet's resume"
            loading={<p>Loading resume preview...</p>}
            error={<p>The preview could not load. Please use the download button.</p>}
          >
            <Page className="resume-page" pageNumber={1} width={width} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumePdf}
            download="Elyes_Thabet_Resume.pdf"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload aria-hidden="true" />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
