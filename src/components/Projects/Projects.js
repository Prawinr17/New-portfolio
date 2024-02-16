import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/Project.svg";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/Project2.svg";

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
        <Row style={{ justifyContent: "center", paddingBottom: "100px" }}>
          <Col md={4} className="project-card">

          <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Monterrey Security"
              description="A Event Oraganiation Website. Build with WordPress,With some customizations css and Javascript."
             
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Forsa"
              description="People managment system oraganized by Egypt goverment Funded by World Bank. And developed by React.js,Tailwind Css,Asp.Net Core and Postgresql With Microservices."
  
            />
         
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
